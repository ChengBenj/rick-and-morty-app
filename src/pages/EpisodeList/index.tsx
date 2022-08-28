import React from 'react';
import { useQuery } from '@apollo/client';

import { listEpisodes } from '../../services/episodes';
import Loader from '../../components/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import Season from './components/Season';
import FetchMore from '../../components/FetchMore';

const EpisodeList: React.FC = () => {
	const [page, setPage] = React.useState(1);
	const [episodes, setEpisodes] = React.useState<Array<Episode>>([]);

	const episodesFetch = useQuery(listEpisodes, {
		variables: {
			page,
		},
		onCompleted: ({ data }) => {
			setEpisodes((prev) => [...prev, ...data.results]);
		},
	});

	const handleFetchMore = async () => {
		try {
			if (episodesFetch.data.data.info.pages === page) return;

			setPage((page) => {
				episodesFetch.fetchMore({
					variables: {
						page: page + 1,
					},
				});

				return page + 1;
			});
		} catch (error) {
			console.error(error);
		}
	};

	const groupBySeasons = () => {
		const genSeasons = function* () {
			const seasons = episodes.reduce<Record<string, Array<Episode>>>(
				(seasons, data) => {
					const result = /(?<season>\w{3})(?<episode>\w{3})/g.exec(
						data.episode!
					);

					if (!result) return seasons;

					const { season, episode } = result?.groups!;

					if (!seasons[season]) {
						seasons[season] = [data];
					} else {
						seasons[season].push(data);
					}

					return seasons;
				},
				{}
			);

			for (const key in seasons) {
				yield {
					season: key,
					episodes: seasons[key],
				};
			}
		};
		const gen = genSeasons();
		const seasons = [...gen];

		return seasons;
	};

	return (
		<div className='w-full min-h-full px-4 md:px-16 py-4'>
			{episodesFetch.loading && <Loader />}
			{episodesFetch.error && <span>Error!</span>}

			<div className='flex flex-col justify-center gap-4'>
				{groupBySeasons().map((season) => (
					<Season key={season.season} {...season} />
				))}
			</div>

			<div className='flex justify-center items-center mt-4'>
				<FetchMore
					onClick={handleFetchMore}
					page={page}
					totalPage={episodesFetch.data?.data?.info?.pages}
				/>
			</div>
		</div>
	);
};

export default EpisodeList;

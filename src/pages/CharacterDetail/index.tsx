import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader';
import Tag from '../../components/Tag';
import { CharacterStatusColors } from '../../constants/colors';
import { getCharacterById } from '../../services/characters';
import LocationSection from './components/LocationSection';

type CharacterDetailProps = {};

const CharacterDetail = (props: CharacterDetailProps) => {
	const { id } = useParams();

	const { data, error, ...query } = useQuery<{ character?: Character }>(
		getCharacterById,
		{
			variables: {
				id,
			},
		}
	);

	return (
		<div className='p-4 flex flex-col gap-2'>
			{query.loading ? (
				<Loader />
			) : (
				<>
					<img
						src={data?.character?.image}
						className='rounded-full w-32 self-center'
					/>

					<div className='flex flex-row self-center items-center gap-2'>
						<span className='text-2xl'>
							{data?.character?.name}, {data?.character?.gender}
						</span>
						<Tag
							label={data?.character?.status || 'unknown'}
							pulse={data?.character?.status === 'Alive'}
							color={
								CharacterStatusColors[data?.character?.status || 'unknown']
							}
						/>
					</div>

					<div className='flex flex-row self-center justify-evenly w-full'>
						<div className='flex flex-row self-center items-center'>
							<span>Specie:</span>
							<span className='font-bold'>{data?.character?.species}</span>
						</div>
						<div className='flex flex-row self-center items-center'>
							<span>Type:</span>
							<span className='font-bold'>
								{data?.character?.type || 'N/A'}
							</span>
						</div>
					</div>

					{!!data?.character?.origin && (
						<LocationSection title='Origin' {...data?.character?.origin} />
					)}

					{!!data?.character?.location && (
						<LocationSection title='Location' {...data?.character?.location} />
					)}

					<div>
						<span className='text-2xl font-bold'>Episodes</span>

						<div className='flex flex-col divide-y-2 gap-2'>
							{data?.character?.episode?.map((episode) => (
								<div className='flex flex-col pt-2'>
									<div className='flex flex-row'>
										<span>Name: </span>
										<span className='font-bold'>
											{episode.name} ({episode.episode})
										</span>
									</div>
									<div className='flex flex-row'>
										<span>Air date: </span>
										<span className='font-bold'>{episode.air_date}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default CharacterDetail;

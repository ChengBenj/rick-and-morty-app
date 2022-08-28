import React from 'react';
import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';

import CharacterCard from '../../components/CharacterCard';
import { listCharacters } from '../../services/characters';
import Loader from '../../components/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import FetchMore from '../../components/FetchMore';

const CharacterList: React.FC = () => {
	const [page, setPage] = React.useState(1);
	const [characters, setCharacters] = React.useState<Array<Character>>([]);

	const navigate = useNavigate();
	const location = useLocation();

	const charactersFetch = useQuery(listCharacters, {
		variables: {
			page,
		},
		onCompleted: ({ data }) => {
			setCharacters((prev) => [...prev, ...data.characters]);
		},
	});

	const handleFetchMore = async () => {
		try {
			setPage((page) => {
				charactersFetch.fetchMore({
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

	const handleDetail = (id: number) => () => {
		navigate(`/character/${id}`, {
			state: {
				backgroundLocation: location,
			},
		});
	};

	return (
		<div className='w-full min-h-full px-4 md:px-16 py-4 bg-gray-50'>
			{charactersFetch.loading && <Loader />}
			{charactersFetch.error && <span>Error!</span>}

			<div className='flex flex-row flex-wrap justify-center gap-4'>
				{characters.map((character, index: number) => (
					<CharacterCard
						key={index + '_' + character.id}
						{...character}
						onClick={handleDetail(character.id!)}
					/>
				))}
			</div>

			<div className='flex justify-center items-center mt-4'>
				<FetchMore
					onClick={handleFetchMore}
					page={page}
					totalPage={charactersFetch.data?.data?.info?.pages}
				/>
			</div>
		</div>
	);
};

export default CharacterList;

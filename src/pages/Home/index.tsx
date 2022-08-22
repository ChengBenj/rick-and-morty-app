import React from 'react';
import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';

import CharacterCard from '../../components/CharacterCard';
import { listCharacters } from '../../services/characters';
import Loader from '../../components/Loader';
import { useLocation, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
	const [page, setPage] = React.useState(0);
	const [characters, setCharacters] = React.useState<Array<any>>([]);

	const navigate = useNavigate();
	const location = useLocation();

	const charactersFetch = useQuery(listCharacters, {
		variables: {
			page,
		},
		onCompleted: (data) => {
			console.info(data.characters.info);
			setCharacters((prev) => [...prev, ...data.characters.results]);
		},
	});

	const handleFetchMore = async () => {
		setPage((page) => page + 1);

		try {
			await charactersFetch.fetchMore({
				variables: {
					page: page,
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleDetail = (id: string) => () => {
		navigate(`/character/${id}`, {
			state: {
				backgroundLocation: location,
			},
		});
	};

	return (
		<div className='w-full min-h-full px-4 md:px-16 py-4 bg-indigo-600'>
			{charactersFetch.loading && <Loader />}
			{charactersFetch.error && <span>Error!</span>}

			<div className='flex flex-row flex-wrap justify-center gap-4'>
				{characters.map((character: any, index: number) => (
					<CharacterCard
						key={index + '_' + character.id}
						{...character}
						onClick={handleDetail(character.id)}
					/>
				))}
			</div>

			<div className='flex justify-center items-center mt-4'>
				<div
					className='w-8 h-8 rounded-full bg-white cursor-pointer'
					onClick={handleFetchMore}
				/>
			</div>
		</div>
	);
};

export default Home;

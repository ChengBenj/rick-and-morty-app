import React from 'react';

type SeasonProps = {
	season: string;
	episodes: Episode[];
};

const Season = (props: SeasonProps) => {
	return (
		<div>
			<span className='text-xl text-indigo-600 font-bold'>{props.season}</span>

			<div className='flex flex-col'>
				{props.episodes.map((episode) => (
					<span key={episode.id}>{episode.name}</span>
				))}
			</div>
		</div>
	);
};

export default Season;

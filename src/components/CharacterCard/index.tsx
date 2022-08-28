import React from 'react';

type CharacterCardProps = {
	onClick: () => void;
} & Partial<Character>;

const CharacterCard = ({ id, name, image, onClick }: CharacterCardProps) => {
	return (
		<div
			className='hover:z-10 transition-transform relative p-4 bg-white rounded-lg flex flex-col w-96 cursor-pointer hover:scale-110 shadow-md after:shadow-xl after:transition-opacity after:duration-300 after:w-full after:h-full after:opacity-0 hover:after:opacity-100 after:absolute after:inset-0'
			onClick={onClick}
			data-testid={`character-card-${id}`}
		>
			<span>{name}</span>
			<img src={image} className='w-full' />
		</div>
	);
};

export default CharacterCard;

import React from 'react';

const CharacterCard: React.FC = ({ name, image, onClick }: any) => {
	return (
		<div
			className='p-4 bg-white rounded-lg flex flex-col w-96 cursor-pointer'
			onClick={onClick}
		>
			<span>{name}</span>
			<img src={image} className='w-full' />
		</div>
	);
};

export default CharacterCard;

import React from 'react';

type LocationSectionProps = {
	title: string;
	name?: string;
	type?: string;
	dimension?: string;
};

const LocationSection = ({ title, ...props }: LocationSectionProps) => {
	return (
		<div className='flex flex-col'>
			<span className='text-2xl font-bold'>{title}</span>
			{props?.name && (
				<div>
					<span className=''>Name: </span>
					<span className='font-bold'>{props.name}</span>
				</div>
			)}
			{props?.type && (
				<div>
					<span className=''>Type: </span>
					<span className='font-bold'>{props.type}</span>
				</div>
			)}
			{props?.dimension && (
				<div>
					<span className=''>Dimension: </span>
					<span className='font-bold'>{props.dimension}</span>
				</div>
			)}
		</div>
	);
};

export default LocationSection;

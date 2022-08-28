import React from 'react';

type FetchMoreProps = {
	onClick: () => void;
	page: number;
	totalPage: number;
};

const FetchMore = ({ page, totalPage, onClick }: FetchMoreProps) => {
	if (totalPage === page) {
		return null;
	}

	return (
		<div
			className='w-8 h-8 rounded-full bg-indigo-600 cursor-pointer shadow-lg shadow-indigo-600'
			onClick={onClick}
		/>
	);
};

export default FetchMore;

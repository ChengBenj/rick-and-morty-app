import React from 'react';
import Overlay from '../Overlay';

const Loader: React.FC = () => {
	return (
		<div className='fixed inset-0 w-full h-full flex items-center justify-center z-20'>
			<Overlay />
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='m-auto bg-transparent block'
				width='200px'
				height='200px'
				viewBox='0 0 100 100'
				preserveAspectRatio='xMidYMid'
			>
				<circle
					cx='50'
					cy='50'
					fill='none'
					className='stroke-indigo-600'
					strokeWidth='4'
					r='35'
					strokeDasharray='164.93361431346415 56.97787143782138'
				>
					<animateTransform
						attributeName='transform'
						type='rotate'
						repeatCount='indefinite'
						dur='1s'
						values='0 50 50;360 50 50'
						keyTimes='0;1'
					></animateTransform>
				</circle>
			</svg>
		</div>
	);
};

export default Loader;

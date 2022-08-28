import React from 'react';
import { Outlet, matchPath, useNavigate } from 'react-router-dom';

type MenuItemProps = {
	route: string;
};

const MenuItem = ({
	children,
	route,
}: React.PropsWithChildren<MenuItemProps>) => {
	const navigate = useNavigate();
	const path = matchPath('/:route', window.location.pathname);

	const active = path?.params.route === route;

	const handleNavigate = () => {
		navigate(route);
	};

	return (
		<span
			className={`relative text-white text-lg uppercase cursor-pointer after:transition-transform after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:border-b after:border-white after:scale-x-${
				active ? 100 : 0
			} hover:after:scale-x-100`}
			onClick={handleNavigate}
		>
			{children}
		</span>
	);
};

const Template: React.FC = () => {
	return (
		<div>
			<div className='bg-indigo-600 flex items-center justify-center gap-4 p-4 shadow'>
				<MenuItem route='characters'>Characters</MenuItem>
				<MenuItem route='episodes'>Episodes</MenuItem>
			</div>
			<Outlet />
		</div>
	);
};

export default Template;

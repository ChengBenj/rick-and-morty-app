import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Modal from '../components/Modal';

import CharacterDetail from '../pages/CharacterDetail';
import Home from '../pages/Home';

const Router: React.FC = () => {
	const location = useLocation();

	const state = location.state as { backgroundLocation?: Location };

	return (
		<>
			<Routes location={state?.backgroundLocation || location}>
				<Route index element={<Home />} />
				<Route path='*' element={<div>Teste</div>} />
			</Routes>

			<Modal open={!!state?.backgroundLocation}>
				{!!state?.backgroundLocation && (
					<Routes>
						<Route path='character'>
							<Route index element={<div>ALO</div>} />
							<Route path=':id' element={<CharacterDetail />} />
							<Route path='*' element={<div>ALO 2</div>} />
						</Route>
						<Route path='*' element={<div>Todos</div>} />
					</Routes>
				)}
			</Modal>
		</>
	);
};

export default Router;

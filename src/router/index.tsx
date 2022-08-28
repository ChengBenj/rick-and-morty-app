import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Modal from '../components/Modal';

import CharacterDetail from '../pages/CharacterDetail';
import CharacterList from '../pages/CharacterList';
import EpisodeList from '../pages/EpisodeList';
import Template from '../template';

const Router: React.FC = () => {
	const location = useLocation();

	const state = location.state as { backgroundLocation?: Location };

	return (
		<>
			<Routes location={state?.backgroundLocation || location}>
				<Route element={<Template />}>
					<Route path='characters' element={<CharacterList />} />
					<Route path='episodes' element={<EpisodeList />} />
				</Route>
			</Routes>

			<Modal open={!!state?.backgroundLocation}>
				{!!state?.backgroundLocation && (
					<Routes>
						<Route path='character'>
							<Route path=':id' element={<CharacterDetail />} />
						</Route>
					</Routes>
				)}
			</Modal>
		</>
	);
};

export default Router;

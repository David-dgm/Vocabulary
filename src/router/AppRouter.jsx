import { Route, Routes } from 'react-router-dom';

import { MemoryCardsRoutes } from '../cards';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {
	// <Route path='/*' element={<MemoryCardsRoutes />} />
	return (
		<Routes>
			<Route
				path='/auth/*'
				element={
					<PublicRoutes>
						<AuthRoutes />
					</PublicRoutes>
				}
			/>

			<Route
				path='/*'
				element={
					<PrivateRoutes>
						<MemoryCardsRoutes />
					</PrivateRoutes>
				}
			/>
		</Routes>
	);
};

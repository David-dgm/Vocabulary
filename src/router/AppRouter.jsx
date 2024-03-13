import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { MemoryCardsRoutes } from '../cards';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
	// <Route path='/*' element={<MemoryCardsRoutes />} />
	return (
		<Routes>
			<Route  path='login' element={
				<PublicRoutes>
					<LoginPage />
				</PublicRoutes>
			} />

			<Route
				path='/*'
				element={
					<PrivateRoute>
						<MemoryCardsRoutes /> 
					</PrivateRoute>
				}
			/>
		</Routes>
	);
};

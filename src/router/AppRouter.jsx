import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { MemoryCardsRoutes } from '../cards';
import { PrivateRoute } from '../cards/routes/PrivateRoute';
import { PublicRoutes } from '../cards/routes/PublicRoutes';

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

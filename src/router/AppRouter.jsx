import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { MemoryCardsRoutes } from '../cards';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
	const status = useCheckAuth();

	if (status === 'checking') {
		return <CheckingAuth />;
	}

	// <Route path='/*' element={<MemoryCardsRoutes />} />
	return (
		<Routes>
			{status === 'authenticated' ? (
				<Route path='/*' element={<MemoryCardsRoutes />} />
			) : (
				<Route path='/auth/*' element={<AuthRoutes />} />
			)}
			<Route path='/*' element={<Navigate to='/auth/login' />} />
			{/* <Route
				path='/*'
				element={
					<PrivateRoutes>
						<MemoryCardsRoutes />
					</PrivateRoutes>
				}
			/> */}
		</Routes>
	);
};

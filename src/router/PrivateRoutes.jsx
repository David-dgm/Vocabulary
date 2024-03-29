import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
	const { logged } = useContext(AuthContext);
	const { pathname, search } = useLocation();

	const lastPath = pathname + search;
	localStorage.setItem('last-path', lastPath);

	return logged ? children : <Navigate to='/auth/' />;
};

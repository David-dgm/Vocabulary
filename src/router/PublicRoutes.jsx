import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

export const PublicRoutes = ({ children }) => {
	const { logged } = useContext(AuthContext);

	return logged ? <Navigate to='/search' /> : children;
};

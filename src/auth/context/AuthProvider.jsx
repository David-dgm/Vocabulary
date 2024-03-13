import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';
import { types } from '../types/types';

const initialState = {
	logged: false,
};

const init = () => {
	const user = JSON.parse(localStorage.getItem('user-memo'));

	return {
		logged: !!user,
		user,
	};
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState, init);

	const login = (name = '') => {
		const user = { id: 'ABC', name };
		const action = {
			type: types.login,
			payload: user
		};
		localStorage.setItem('user-memo',JSON.stringify( user));
		dispatch(action);
	};

	const logout = () => {
		localStorage.removeItem('user-memo');
		const action = { type: types.logout };
		dispatch(action);
	};
	return (
		<AuthContext.Provider
			value={{
				...state,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

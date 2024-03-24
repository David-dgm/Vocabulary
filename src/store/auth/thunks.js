import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './';

export const checkingAuthentication = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
	};
};
export const startGoogleSignIn = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await signInWithGoogle();
		// console.log(result);
		if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

		dispatch(login(result));
	};
};

export const startCreatingUserWithMailPassword = ({ email, password, displayName }) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await registerUserWithEmailPassword(email, password, displayName);

		if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

		dispatch(login(result));
	};
};

export const startLoginWithEmailPaswword = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await loginWithEmailPassword({ email, password });

		if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

		dispatch(login(result));
	};
};

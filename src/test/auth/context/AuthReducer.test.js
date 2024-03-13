import { authReducer, types } from '../../../auth';

describe('AuthReducer-Test', () => {
	const userExpected = { id: 'ABC', name: 'david' };
	const initialState = { logged: false };
	const loggedState = { logged: true, user: userExpected };

	test('should return default state', () => {
		const state = authReducer(initialState, {});

		expect(state).toBe(initialState);
	});

	test('should call login when action type is login', () => {
		const action = {
			type: types.login,
			payload: userExpected,
		};

		const { logged, user } = authReducer(initialState, action);

		expect(logged).toBeTruthy();
		expect(user).toBe(userExpected);
	});

	test('should call logout when action type is logout', () => {
		const action = {
			type: types.logout,
		};

		const { logged, user } = authReducer(loggedState, action);

		expect(logged).toBeFalsy();
		expect(user).toBeUndefined();
	});
});

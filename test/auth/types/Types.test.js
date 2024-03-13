import { types } from '../../../src/auth';

describe('Types-Test', () => {
	test('should return all types', () => {
		expect(types).toEqual({
			login: '[Auth] Login',
			logout: '[Auth] Logout',
		});
	});
});

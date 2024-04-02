import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

const authMock = jest.fn();
// jest.mock('../../src/hooks', () => {
// 	return authMock.mockReturnValue('checking');
// });

describe('AppRouter-Test', () => {
	test('should show login if not is logged', () => {
		// const initialStatus = {
		// 	logged: false,
		// };
		// render(
		// 	<MemoryRouter initialEntries={['/adjective']}>
		// 		<AuthContext.Provider value={initialStatus}>
		// 			<AppRouter />
		// 		</AuthContext.Provider>
		// 	</MemoryRouter>
		// );
		// expect(screen.getAllByText('LoginPage')).toBeTruthy();
		// expect(screen.getAllByText('Login')).toBeTruthy();
	});
	test('should show children if is logged', () => {
		// const initialStatus = {
		// 	logged: true,
		// };
		// render(
		// 	<MemoryRouter initialEntries={['/auth/login']}>
		// 		<AuthContext.Provider value={initialStatus}>
		// 			<AppRouter />
		// 		</AuthContext.Provider>
		// 	</MemoryRouter>
		// );
		// expect(screen.getAllByText('Diccionario').length).toBeGreaterThanOrEqual(1);
	});
});

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('AppRouter-Test', () => {
	test('should show login if not is logged', () => {
		const initialStatus = {
			logged: false,
		};

		render(
			<MemoryRouter initialEntries={['/adjetivo']}>
				<AuthContext.Provider value={initialStatus}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		
		expect(screen.getAllByText('LoginPage').length).toBeTruthy();
		expect(screen.getAllByText('Login').length).toBeTruthy();
	});
});

import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('AppRouter-Test', () => {
	test('should show login if not is logged', () => {
		const initialStatus = {
			logged: false,
		};

		render(
			<MemoryRouter initialEntries={['/adjective']}>
				<AuthContext.Provider value={initialStatus}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getAllByText('LoginPage')).toBeTruthy();
		expect(screen.getAllByText('Login')).toBeTruthy();
	});
	test('should show children if is logged', () => {
		const initialStatus = {
			logged: true,
		};

		render(
			<MemoryRouter initialEntries={['/login']}>
				<AuthContext.Provider value={initialStatus}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getAllByText('Diccionario').length).toBeGreaterThanOrEqual(1);
	});
});

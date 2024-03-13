import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PublicRoutes } from '../../src/router/PublicRoutes';

describe('PublicRoutes-Test', () => {
	test('should show children component if is not logged', () => {
		const contextValue = {
			logged: false,
		};
		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoutes>
					<h1>Children</h1>
				</PublicRoutes>
			</AuthContext.Provider>
		);
		expect(screen.getByText('Children')).toBeTruthy();
	});
	test('should navigate if is logged', () => {
		const contextValue = {
			logged: true,
			user: {
				name: 'NombreUsuario',
				id: '123',
			},
		};
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/login']}>
					<Routes>
						<Route
							path='login'
							element={
								<PublicRoutes>
									<h1>Children</h1>
								</PublicRoutes>
							}
						/>
						<Route path='/search' element={<h1>Diccionario</h1>} />
					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(screen.getByText('Diccionario')).toBeTruthy();
	});
});

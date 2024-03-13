import { render } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoutes } from '../../src/router/PrivateRoutes';

describe('PrivateRoutes-Test', () => {
	test('should show children component if is logged', () => {
		Storage.prototype.setItem = jest.fn();
		const contextValue = {
			logged: true,
			user: {
				name: 'NombreUsuario',
				id: '123',
			},
		};
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/dictionary']}>
					<PrivateRoutes>
						<h1>Children</h1>
					</PrivateRoutes>
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(localStorage.setItem).toHaveBeenCalledWith('last-path', '/dictionary');
	});
});

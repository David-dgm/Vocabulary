import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui';
import { AuthContext } from '../../../src/auth';
import { MemoryRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();
// Para Mockear el react-dom y sobre escribir la funcion useNavigate, comprobando si se le está llamando
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('NavBar-Test', () => {
	const userName = 'NombreUsuario';

	const contextValue = {
		logged: true,
		user: {
			name: userName,
			id: '123',
		},
		logout: jest.fn(),
	};

	beforeEach(() => jest.clearAllMocks());

	test('should show user name', () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(screen.findByText(userName)).toBeTruthy();
	});

	test('should call to logout function and navigate when do on click over button', () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		const logoutButton = screen.getByRole('button');
		fireEvent.click(logoutButton);

		expect(contextValue.logout).toHaveBeenCalled();
		expect(mockedUsedNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});
});

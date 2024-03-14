import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/cards/pages/SearchPage';

const mockedUsedNavigate = jest.fn();
// Para Mockear el react-dom y sobre escribir la funcion useNavigate, comprobando si se le está llamando
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('SearchPage-Test', () => {
	test('should show default values', () => {
		const { container } = render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);

		expect(container).toMatchSnapshot();
	});
	test('should show indo about word into input text with query-string value', () => {
		const word = 'fuego';
		render(
			<MemoryRouter initialEntries={[`/search?q=${word}`]}>
				<SearchPage />
			</MemoryRouter>
		);
		const input = screen.getByRole('textbox');
		expect(input.value).toBe(word);

		const image = screen.getByRole('img');
		expect(image.src).toContain(`/assets/vocabulary/f-${word}.jpg`);
		expect(image.alt.toLowerCase()).toEqual(word);

		const searchMessageContainer = screen.getByTestId('search-message');
		expect(searchMessageContainer.style).toHaveProperty('display', 'none');

		const errorMessageContainer = screen.getByTestId('error-message');
		expect(errorMessageContainer.style).toHaveProperty('display', 'none');
	});

	test('should show error message when not found the word', () => {
		const word = 'not-exist';
		render(
			<MemoryRouter initialEntries={[`/search?q=${word}`]}>
				<SearchPage />
			</MemoryRouter>
		);

		const errorMessageContainer = screen.getByTestId('error-message');
		expect(errorMessageContainer.style).toHaveProperty('display', '');

		const searchMessageContainer = screen.getByTestId('search-message');
		expect(searchMessageContainer.style).toHaveProperty('display', 'none');
	});

	test('should call to navigate to new screen', () => {
		const newWord = 'newword';

		render(
			<MemoryRouter initialEntries={['/search']}>
				<SearchPage />
			</MemoryRouter>
		);

		const searchInput = screen.getByTestId('search-input');
		fireEvent.change(searchInput, { target: { name: 'searchText', value: newWord } });

		const form = screen.getByRole('form');
		fireEvent.submit(form);

		expect(mockedUsedNavigate).toHaveBeenCalledWith(`?q=${newWord}`);
	});
});

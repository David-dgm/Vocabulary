import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { WordCard } from '../components';
import { getWordsByName } from '../helpers';
import { Typography } from '@mui/material';

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const words = getWordsByName(q);

	const showSearch = q.length === 0;
	const showError = q.length > 0 && words.length === 0;

	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();

		const wordTrimmed = searchText.trim();

		// if (wordTrimmed.length <= 1) return;
		navigate(`?q=${wordTrimmed.toLowerCase()}`);
	};

	return (
		<>
			<Typography variant='h1'>Dictionary</Typography>

			<hr />
			<div className='row'>
				<div className='col-5'>
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSearchSubmit} aria-label='form'>
						<input
							type='text'
							placeholder='Search a word'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={onInputChange}
							data-testid='search-input'
						/>
						<button className='btn btn-outline-primary mt-1'>Search</button>
					</form>
				</div>
				<div className='col-7'>
					<h4>Results</h4>
					<hr />

					<div
						data-testid='search-message'
						className='alert alert-primary animate__animated animate__fadeIn'
						style={{ display: showSearch ? '' : 'none' }}
					>
						Search a word.
					</div>
					<div
						data-testid='error-message'
						className='alert alert-danger animate__animated animate__fadeIn'
						style={{ display: showError ? '' : 'none' }}
					>
						Not found <b>{q}</b>
					</div>

					{words.map((word) => (
						<WordCard key={word.id} {...word} />
					))}
				</div>
			</div>
		</>
	);
};

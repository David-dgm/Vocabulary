import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { FurniturePage,  SearchPage, MemoCardPage, AdjectivePage } from '../pages';

export const MemoryCardsRoutes = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='adjetivos' element={<AdjectivePage />} />
					<Route path='mobiliario' element={<FurniturePage />} />

					<Route path='search' element={<SearchPage />} />
					<Route path='memo-card/:wordId' element={<MemoCardPage />} />

					<Route path='/' element={<Navigate to='/adjetivos' />} />
				</Routes>
			</div>
		</>
	);
};

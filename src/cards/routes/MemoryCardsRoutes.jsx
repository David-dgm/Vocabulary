import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { FurniturePage,  SearchPage, MemoCardPage, AdjectivePage } from '../pages';
import { VocabularyPage } from '../pages/VocabularyPage';

export const MemoryCardsRoutes = () => {
	return (
		<>
			{/* <Navbar /> */}
			<div className='container'>
				<Routes>
					<Route path='adjective' element={<AdjectivePage />} />
					<Route path='furniture' element={<FurniturePage />} />

					<Route path='search' element={<SearchPage />} />
					<Route path='word-card/:wordId' element={<MemoCardPage />} />
					<Route path='vocabulary' element={<VocabularyPage />} />

					<Route path='/' element={<Navigate to='/search' />} />
				</Routes>
			</div>
		</>
	);
};

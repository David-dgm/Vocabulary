import { Navigate, Route, Routes } from 'react-router-dom';

import { FurniturePage,  SearchPage, MemoCardPage, AdjectivePage } from '../pages';
import { VocabularyPage } from '../pages/VocabularyPage';

export const MemoryCardsRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/vocabulary' />} />
			<Route path='vocabulary' element={<VocabularyPage />} />

			<Route path='adjective' element={<AdjectivePage />} />
			<Route path='furniture' element={<FurniturePage />} />

			<Route path='search' element={<SearchPage />} />
			<Route path='word-card/:wordId' element={<MemoCardPage />} />

			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	);
};

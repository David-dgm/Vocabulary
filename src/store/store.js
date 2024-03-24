import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { vocabularySlice } from './vocabulary';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		vocabulary: vocabularySlice.reducer,
	},
});

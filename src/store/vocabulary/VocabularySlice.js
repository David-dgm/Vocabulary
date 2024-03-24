import { createSlice } from '@reduxjs/toolkit';

export const vocabularySlice = createSlice({
	name: 'vocabulary',
	initialState: {
		isSaving: false,
		messageSave: '',
		words: [],
		active: null,
	},
	reducers: {
		startSavingNewWord: (state) => {
			state.isSaving = true;
		},
		addNewEmptyWord: (state, action) => {
			state.words.push(action.payload);
			state.isSaving = false;
		},
		setActiveWord: (state, action) => {
			state.active = action.payload;
		},
		setWords: (state, action) => {
			state.words = action.payload;
		},
		setSaving: (state) => {},
		updateWord: (state, action) => {},
		deleteWordById: (state, action) => {},
	},
});

// Action creators are generated for each case reducer function
export const { startSavingNewWord, addNewEmptyWord, setActiveWord, setWords, setSaving, updateWord, deleteWordById } =
	vocabularySlice.actions;

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
			state.messageSave = '';
		},
		setWords: (state, action) => {
			state.words = action.payload;
		},
		setSaving: (state) => {
			state.isSaving = true;
			state.messageSave = '';
		},
		updateWord: (state, action) => {
			state.isSaving = false;
			state.words = state.words.map((word) => {
				if (word.id === action.payload.id) {
					return action.payload;
				}
				return word;
			});

			state.messageSave = `${action.payload.value}, actualizada correctamente`;
			// console.log(state.messageSave);
		},
		setPhotosToActiveNote: (state, action) => {
			console.log(action.payload);
			state.active.wordImage = { ...action.payload };
			// Para varias img a la vez
			//state.active.imgId = [...state.active.imgId, ...action.payload];
			state.isSaving = false;
		},

		clearNotesLogout: (state) => {
			state.isSaving = false;
			state.messageSaved = '';
			state.words = [];
			state.active = null;
		},
		deleteWordById: (state, action) => {},
	},
});

// Action creators are generated for each case reducer function
export const {
	addNewEmptyWord,
	clearNotesLogout,
	deleteWordById,
	setActiveWord,
	setPhotosToActiveNote,
	setSaving,
	setWords,
	startSavingNewWord,
	updateWord,
} = vocabularySlice.actions;

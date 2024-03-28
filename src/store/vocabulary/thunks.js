import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import {
	addNewEmptyWord,
	deleteWordById,
	setActiveWord,
	setSaving,
	setWords,
	startSavingNewWord,
	updateWord,
} from './VocabularySlice';
import { loadWords } from '../../helpers';

export const startNewWord = () => {
	return async (dispatch, getState) => {
		dispatch(startSavingNewWord());

		const { uid: userUid } = getState().auth;
		const now = new Date().toLocaleString('es-ES');

		const newWord = {
			id: '',
			value: '',
			i18Value: '',
			useCases: [],
			firstAppearance: '',
			contextId: '',
			wordImage: {},
			createDate: now,
			createUser: userUid,
			lastUpdateDate: now,
			lastUserUpdate: userUid,
		};

		const newDocument = doc(collection(FirebaseDB, `words`));
		await setDoc(newDocument, newWord);

		newWord.id = newDocument.id;
		dispatch(addNewEmptyWord(newWord));
		dispatch(setActiveWord(newWord));
	};
};

export const startLoadingWords = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		if (!uid) throw new Error('El UID del usuario no existe.');

		const wordList = await loadWords(uid);
		dispatch(setWords(wordList));
	};
};

export const startSaveWord = () => {
	return async (dispatch, getState) => {
		dispatch(setSaving());
		// const { uid } = getState().auth;
		const { active: word } = getState().vocabulary;

		const wordToFireStore = { ...word };

		delete wordToFireStore.id;

		const docRef = doc(FirebaseDB, `words/${word.id}`);
		await setDoc(docRef, wordToFireStore, { merge: true });

		dispatch(updateWord(word));
	};
};

export const startDeletingWord = () => {
	return async (dispatch, getState) => {
		// const { uid } = getState().auth;
		const { active: word } = getState().vocabulary;

		const docRef = doc(FirebaseDB, `words/${word.id}`);
		await deleteDoc(docRef);

		dispatch(deleteWordById(word.id));
	};
};

import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyWord, setActiveWord, startSavingNewWord } from './VocabularySlice';

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
			imgId: [],
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

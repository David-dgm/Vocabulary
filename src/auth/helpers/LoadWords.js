import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const loadWords = async (userId = '') => {
	if (!userId) throw new Error('El UID del usuario no existe.');

	const collectionRef = collection(FirebaseDB, 'words');
	const docs = await getDocs(collectionRef);

	const words = [];
	docs.forEach((document) => {
		words.push({ id: document.id, ...document.data() });
	});

	return words;
};

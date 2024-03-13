import { vocabulary } from '../data/Vocabulary';

export const getVocabularyByContext = (context) => {
	const validContext = ['adjective', 'furniture'];

	if (!validContext.includes(context)) {
		throw new Error(`${context} is not a valid context.`);
	}

	return vocabulary.filter((word) => word.context === context);
};

import PropTypes from 'prop-types';
import { getVocabularyByContext } from '../helpers';
import { WordCard } from './';
import { useMemo } from 'react';

export const WordList = ({ context }) => {
	const wordsByContext = useMemo(() => getVocabularyByContext(context), [context]);

	return (
		<div className='row rows-col-1 row-cols-md-3 g-3'>
			{wordsByContext.map((word) => (
				<WordCard key={word.id} {...word} />
			))}
		</div>
	);
};

WordList.propTypes = {
	context: PropTypes.string.isRequired,
};

import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { CardView, NothingSelectedView } from '../views';
import { VocabularyLayout } from '../layout/VocabularyLayout';
import { useDispatch, useSelector } from 'react-redux';
import { startNewWord } from '../../store/vocabulary/thunks';

export const VocabularyPage = () => {
	const { isSaving, active: activeWord } = useSelector((state) => state.vocabulary);

	const dispatch = useDispatch();

	const onClickNewWord = () => {
		dispatch(startNewWord());
	};

	return (
		<VocabularyLayout>
			{!!activeWord ? <CardView /> : <NothingSelectedView />}

			{/* <CardView /> */}
			{/* <NothingSelectedView /> */}
			{/* <Typography variant='h1'>Vocabulary Page</Typography> */}

			<IconButton
				disabled={isSaving}
				onClick={onClickNewWord}
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</VocabularyLayout>
	);
};

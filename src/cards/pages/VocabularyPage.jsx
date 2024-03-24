import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { CardView, NothingSelectedView } from '../views';
import { VocabularyLayout } from '../layout/VocabularyLayout';

export const VocabularyPage = () => {
	return (
		<VocabularyLayout>
			{/* <CardView /> */}
			<NothingSelectedView />
			{/* <Typography variant='h1'>Vocabulary Page</Typography> */}

			<IconButton
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

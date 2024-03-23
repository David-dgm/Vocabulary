import { Box } from '@mui/material';
import { VNavBar } from '../../ui/components';

const drawerWidth = 240;

export const VocabularyLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<VNavBar drawerWidth={drawerWidth} />
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				{children}
			</Box>
		</Box>
	);
};

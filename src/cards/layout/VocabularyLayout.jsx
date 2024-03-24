import { Box, Toolbar } from '@mui/material';
import { SideBar, VNavBar } from '../../ui/components';

const drawerWidth = 240;

export const VocabularyLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<VNavBar drawerWidth={drawerWidth} />
			<SideBar drawerWidth={drawerWidth} />
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};

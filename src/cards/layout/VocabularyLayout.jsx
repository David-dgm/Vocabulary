import { Box, Toolbar } from '@mui/material';
import { SideBar, VNavBar } from '../../ui/components';

const drawerWidth = 280;

export const VocabularyLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
			<VNavBar drawerWidth={drawerWidth} />
			<SideBar drawerWidth={drawerWidth} />
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};

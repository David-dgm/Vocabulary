import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

export const VNavBar = ({ drawerWidth = 240 }) => {
	const { user, logout } = useContext(AuthContext);
	const navigate = useNavigate();

	const onLogout = () => {
		logout();
		navigate('/auth/login', {
			replace: true,
		});
	};

	return (
		<AppBar
			position='fixed'
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
			}}
		>
			<Toolbar>
				<IconButton color='inherit' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
					<MenuOutlined />
				</IconButton>
				<Grid container direction='row' justifyContent='space-between' alignItems='center'>
					<Typography variant='h6' noWrap component='div'>
						Vocabulary App
					</Typography>
					<IconButton color='error' onClick={onLogout}>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

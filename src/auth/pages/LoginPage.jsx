import { AuthContext } from '../context/AuthContext';
import { AuthLayout } from '../layout/AuthLayout';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

export const LoginPage = () => {
	const { login } = useContext(AuthContext);

	const navigate = useNavigate();

	const onLogin = () => {
		const lastPath = localStorage.getItem('last-path') || '/';

		login('David Gomez');
		navigate(lastPath, {
			replace: true,
		});
	};

	return (
		<AuthLayout title='Login'>
			<form>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField label='Correo' type='email' placeholder='correo@google.com' fullWidth />
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField label='Contraseña' type='password' placeholder='Contraseña' fullWidth />
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} sm={6}>
							<Button variant='contained' fullWidth>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button variant='contained' fullWidth>
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>
					<Grid container direction='row' justifyContent='end'>
						<Link component={RouterLink} color='inherit' to='/auth/register'>
							Crear una cuenta nueva
						</Link>
					</Grid>
				</Grid>
			</form>
			<hr />
			<button className='btn btn-primary' onClick={onLogin}>
				Login
			</button>
		</AuthLayout>
	);
};

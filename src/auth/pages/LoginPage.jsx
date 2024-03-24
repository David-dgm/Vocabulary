import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { AuthLayout } from '../layout/AuthLayout';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useContext, useMemo } from 'react';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';

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
	// Nueva version
	const { status } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const { email, password, onInputChange } = useForm({
		email: 'david@google.com',
		password: 123456,
	});

	const isAuthenticated = useMemo(() => status === 'checking', [status]);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log({ email, password });
		dispatch(checkingAuthentication());
	};

	const onGoogleSignIn = () => {
		console.log('onGoogleSignIn');
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title='Login'>
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Correo'
							type='email'
							placeholder='correo@google.com'
							fullWidth
							name='email'
							value={email}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Contraseña'
							type='password'
							placeholder='Contraseña'
							fullWidth
							name='password'
							value={password}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} sm={6}>
							<Button disabled={isAuthenticated} type='submit' variant='contained' fullWidth>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button disabled={isAuthenticated} variant='contained' fullWidth onClick={onGoogleSignIn}>
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

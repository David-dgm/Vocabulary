import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '../layout/AuthLayout';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { useForm } from '../../hooks';
import { startCreatingUserWithMailPassword } from '../../store/auth';

const formData = {
	email: 'david@google.com',
	password: '1234567',
	displayName: 'david-test',
};

const formValidations = {
	email: [(value) => value.includes('@'), 'El correo debe tener una @'],
	password: [(value) => value.length > 5, 'El password debe tener más de 6 caracteres'],
	displayName: [(value) => value.trim().length >= 1, 'El nombre no puede estar en blanco'],
};
export const RegisterPage = () => {
	const dispatch = useDispatch();

	const [formSubmitted, setFormSubmitted] = useState(false);
	const { status, errorMessage } = useSelector((state) => state.auth);
	const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

	const { displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid } =
		useForm(formData, formValidations);

	const onSubmit = (event) => {
		event.preventDefault();
		setFormSubmitted(true);
		if (!isFormValid) return;

		dispatch(startCreatingUserWithMailPassword(formState));
	};

	return (
		<AuthLayout title='Register'>
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Nombre completo'
							type='text'
							placeholder='Jhon Doe'
							fullWidth
							name='displayName'
							value={displayName}
							onChange={onInputChange}
							error={!!displayNameValid && formSubmitted}
							helperText={displayNameValid}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Correo'
							type='email'
							placeholder='correo@google.com'
							fullWidth
							name='email'
							value={email}
							onChange={onInputChange}
							error={!!emailValid && formSubmitted}
							helperText={emailValid}
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
							error={!!passwordValid && formSubmitted}
							helperText={passwordValid}
						/>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
							<Alert severity='error'>{errorMessage}</Alert>
						</Grid>

						<Grid item xs={12}>
							<Button disabled={isCheckingAuthentication} type='submit' variant='contained' fullWidth>
								Crear cuenta
							</Button>
						</Grid>
					</Grid>
					<Grid container direction='row' justifyContent='end'>
						<Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
						<Link component={RouterLink} color='inherit' to='/auth/login'>
							Ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};

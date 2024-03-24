import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGalery } from '../components';

export const CardView = () => {
	return (
		<Grid
			container
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{ mb: 1 }}
			className='animate__animated animate__fadeIn animate__faster'
		>
			<Grid item>
				<Typography fontSize={39} fontWeight='light'>
					23 de Marzo
				</Typography>
			</Grid>

			<Grid item>
				<Button color='primary' sx={{ padding: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>
			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Ingrese un palabra'
					label='Palabra'
					sx={{
						border: 'none',
						mb: 1,
					}}
				/>

				<TextField type='text' variant='filled' fullWidth multiline placeholder='Ingrese un caso de uso' minRows={5} />
			</Grid>
			<ImageGalery />
		</Grid>
	);
};

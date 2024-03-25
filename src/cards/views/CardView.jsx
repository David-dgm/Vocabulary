import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGalery } from '../components';
import { useForm } from '../../hooks/useForm';
import { setActiveWord, startSaveWord } from '../../store/vocabulary';

export const CardView = () => {
	const dispatch = useDispatch();
	const { active: wordActive, messageSave, isSaving } = useSelector((state) => state.vocabulary);

	const { value, firstAppearance, createDate, useCases, onInputChange, formState } = useForm(wordActive);

	const dateString = useMemo(() => {
		// const newDate = new Date(createDate);
		// return newDate.toUTCString();
		return createDate;
	}, [createDate]);

	useEffect(() => {
		dispatch(setActiveWord(formState));
	}, [formState]);

	useEffect(() => {
		if (messageSave.length > 0) {
			Swal.fire('Palabra actualizada', messageSave, 'success');
		}
	}, [messageSave]);

	const onSaveWord = () => {
		dispatch(startSaveWord());
	};
	return (
		<Grid
			container
			direction='column'
			justifyContent='space-between'
			alignItems='center'
			sx={{ mb: 1 }}
			className='animate__animated animate__fadeIn animate__faster'
		>
			<Grid item>
				<Typography fontSize={39} fontWeight='light'>
					{value}
				</Typography>
			</Grid>

			<Grid item>
				<Button disabled={isSaving} onClick={onSaveWord} color='primary' sx={{ padding: 2 }}>
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
					name='value'
					value={value}
					onChange={onInputChange}
				/>

				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Primera aparación'
					label='Primera aparición'
					sx={{
						border: 'none',
						mb: 1,
					}}
					name='firstAppearance'
					value={firstAppearance}
					onChange={onInputChange}
				/>

				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='Ingrese un caso de uso'
					minRows={5}
					name='useCases'
					value={useCases}
					onChange={onInputChange}
				/>
			</Grid>
			<ImageGalery />
		</Grid>
	);
};

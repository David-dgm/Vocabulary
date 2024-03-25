import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { setActiveWord } from '../../store/vocabulary';

export const SideBarItem = ({ value = '', firstAppearance, id, i18Value, createDate, imgId = '', useCases = [] }) => {
	const dispatch = useDispatch();

	const setFocusOn = () => {
		dispatch(setActiveWord({ value, firstAppearance, id, i18Value, createDate, imgId, useCases }));
	};

	const newTitle = useMemo(() => {
		return value > 17 ? value.subString(0, 17) + '...' : value;
	}, [value]);

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={setFocusOn}>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid container>
					<ListItemText primary={newTitle} />
					<ListItemText secondary={`Tema: ${firstAppearance}`} />
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};

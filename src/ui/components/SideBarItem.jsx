import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';

export const SideBarItem = ({ value = '', firstAppearance, id }) => {
	const newTitle = useMemo(() => {
		return value > 17 ? value.subString(0, 17) + '...' : value;
	}, [value]);

	return (
		<ListItem disablePadding>
			<ListItemButton>
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

import { ImageList, ImageListItem } from '@mui/material';

export const ImageGalery = ({ image }) => {
	const { imageName, imageUrl, imgId } = image;

	return (
		<ImageList sx={{ width: '75%', height: 500, mt: 2 }} cols={1} rowHeight={200}>
			{/* {itemData.map((item) => ( */}
			<ImageListItem key={imgId}>
				<img
					srcSet={`${imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
					src={`${imageUrl}?w=164&h=164&fit=crop&auto=format`}
					alt={imageName}
					loading='lazy'
				/>
			</ImageListItem>
			{/* ))} */}
		</ImageList>
	);
};


import { ImageList, ImageListItem } from '@mui/material';

export const ImageGalery = ({ imageName, imageUrl, imgId }) => {
	console.log(imageName);

	return (
		<ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
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


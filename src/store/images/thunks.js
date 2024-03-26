import { fileUpload } from '../../helpers';
import { setPhotosToActiveNote, setSaving } from '../vocabulary';

export const startUploadingFiles = (files = []) => {
	return async (dispatch) => {
		dispatch(setSaving());

		// si quiero guardar más info de la imgen en base de datos coger de aqui
		const { original_filename: imageName, public_id: imgId, secure_url: imageUrl } = await fileUpload(files[0]);

		// codigo para varios archivos
		//const photosUrls = await awaitAllPromise(files);

		dispatch(setPhotosToActiveNote({ imageName, imgId, imageUrl }));
	};
};

const awaitAllPromise = (files) => {
	return async () => {
		const fileUploadPromises = [];

		for (const file of files) {
			fileUploadPromises.push(fileUpload(file));
		}
		const photosUrls = await Promise.all(fileUploadPromises);
		return photosUrls;
	};
};

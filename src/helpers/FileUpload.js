const fileProperty = 'file';
const projectProperty = 'upload_preset';
const cloudUrl = process.env.CLOUDINARY_PUBLIC_UPLOAD;
const cloudProject = process.env.CLOUDINARY_PROJECT;

export const fileUpload = async (file) => {
	if (!file) throw new Error('No hay ningun archivo para cargar.');

	const formData = new FormData();
	formData.append(projectProperty, cloudProject);
	formData.append(fileProperty, file);

	try {
		const response = await fetch(cloudUrl, {
			method: 'POST',
			body: formData,
		});

		if (!response.ok) throw new Error('No se pudo cargar la imagen.');

		const cloudResponse = await response.json();

		return cloudResponse;
	} catch (error) {
		throw new Error(error.message);
	}
};

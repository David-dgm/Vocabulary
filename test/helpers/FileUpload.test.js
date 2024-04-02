import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/FileUpload';
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
	secure: true,
});
describe('FileUpload test', () => {
	test('should upload image', async () => {
		const imgUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
		const response = await fetch(imgUrl);

		const blob = await response.blob();

		const file = new File([blob], 'foto-mock.jpg');
		const image = await fileUpload(file);

		expect(typeof image).toBe('object');
		expect(image.resource_type).toBe('image');
		expect(image.folder).toBe('vocabulary');
		expect(image.original_filename).toBe('foto-mock');
		expect(image.original_extension).toBe('jpg');

		// await cloudinary.uploader.destroy(image.public_id);

		await cloudinary.api.delete_resources([image.public_id], { resource_type: 'image' });
	});

	test('debe de retornar null', async () => {
		const file = new File([], 'foto.jpg');
		expect.assertions(1);
		const url = await fileUpload(file).catch((error) => {
			console.log(error);
			expect(error).toEqual({
				error: 'No se pudo cargar la imagen.',
			});
		});
	});
});

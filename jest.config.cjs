module.exports = {
	testEnvironment: 'jest-environment-jsdom',

	setupFiles: ['./jest.setup.js'],
	transformIgnorePatterns: ['node_modules/(?!(@firebase|sweetalert2|cloudinary)/)'],
	moduleNameMapper: {
		'^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/src/__mocks__/fileMock.js',
		'^.+\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.js',

		'^query-string$': '<rootDir>/node_modules/query-string-v7',
	},
};

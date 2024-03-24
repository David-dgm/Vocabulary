// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDmLePcJE4qmu0Q9vuKvLMRssCQCIba6uY',
	authDomain: 'vocabulary-app-57969.firebaseapp.com',
	projectId: 'vocabulary-app-57969',
	storageBucket: 'vocabulary-app-57969.appspot.com',
	messagingSenderId: '330528623149',
	appId: '1:330528623149:web:70466853250ea4b10f46a4',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

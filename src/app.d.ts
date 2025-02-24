import 'unplugin-icons/types/svelte'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCd4fNEpV2zOr5qQ5rJxMjXq1DWO_FE-YU",
    authDomain: "fruitbowl-df2d9.firebaseapp.com",
    projectId: "fruitbowl-df2d9",
    storageBucket: "fruitbowl-df2d9.appspot.com",
    messagingSenderId: "407991632250",
    appId: "1:407991632250:web:f1674fc99563c21f7ed6c3",
    measurementId: "G-5860EWCQ6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// @ts-expect-error: This doesn't need to get used
const analytics = getAnalytics(app);

export {analytics};

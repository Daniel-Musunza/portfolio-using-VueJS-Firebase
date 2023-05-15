// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
import {getFirestore,FieldValue} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
//   authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxx",
//   projectId: "xxxxxxxxxxxxxxxxx",
//   storageBucket: "xxxxxxxxxxxxxxxxxxx",
//   messagingSenderId: "xxxxxxxxxxxxxxx",
//   appId: "xxxxxxxxxxxxxxxxxxxxx",
//   measurementId: "xxxxxxxxx"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


// const analytics = getAnalytics(app);
const firestamp = FieldValue.serverTimestamp;

  export { firestamp };
export {auth, storage, db};
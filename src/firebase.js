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
const firebaseConfig = {
  apiKey: "AIzaSyAZ-cjikP4Pcx-v0-82qD-OTZFzBTti6D4",
  authDomain: "musunzaportfolio.firebaseapp.com",
  projectId: "musunzaportfolio",
  storageBucket: "musunzaportfolio.appspot.com",
  messagingSenderId: "1008786451341",
  appId: "1:1008786451341:web:dd2c16b3d8bd07aae36bc4",
  measurementId: "G-CPFKLMPZNR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


// const analytics = getAnalytics(app);
const firestamp = FieldValue.serverTimestamp;

  export { firestamp };
export {auth, storage, db};
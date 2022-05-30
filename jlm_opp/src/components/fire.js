// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpsfyiCsKsavXUHK8VEv9VlbSBvLKu8D4",
  authDomain: "jlm-opp.firebaseapp.com",
  projectId: "jlm-opp",
  storageBucket: "jlm-opp.appspot.com",
  messagingSenderId: "992367068886",
  appId: "1:992367068886:web:cda1ad340da4babf4aeb77"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

export default fire;
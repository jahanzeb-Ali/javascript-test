
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCT8Or2wV07fyVI5pbiRWyoL9metiLKwk4",
    authDomain: "mobile-app-83ed1.firebaseapp.com",
    databaseURL: "https://mobile-app-83ed1-default-rtdb.firebaseio.com",
    projectId: "mobile-app-83ed1",
    storageBucket: "mobile-app-83ed1.appspot.com",
    messagingSenderId: "153276770355",
    appId: "1:153276770355:web:15f058479d1e840da41b46"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

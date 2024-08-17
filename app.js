import {auth, app} from "./firebase.mjs"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getStorage,ref } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
const signUpForm = document.querySelector(".signUp-box");
const signinForm = document.querySelector(".login-box");

let loginDiv = document.querySelector(".login-box");
let signLink = document.getElementById("sign-link");
let loginLink = document.getElementById("login-link");
let signUpDiv = document.querySelector(".signUp-box");
const storageRef = ref(storage);
signUpForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(signUpForm.email.value)
    createUserWithEmailAndPassword(auth, signUpForm.email.value,signUpForm.password.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    })
})
signinForm.addEventListener("submit", function(e){
    e.preventDefault()

    signInWithEmailAndPassword(auth, signinForm.email.value,signinForm.password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = "dashboard.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

})

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });















// Event listener for login link
loginLink.addEventListener('click', function () {
    signUpDiv.style.display = "none";
    loginDiv.style.display = "flex";
  
});


// Event listener for sign-up link
signLink.addEventListener('click', function () {
    signUpDiv.style.display = "flex";
    loginDiv.style.display = "none";
});
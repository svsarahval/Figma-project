



const signUpBtn = document.getElementById('signUpBtn');
const logInBtn = document.getElementById('logInBtn');

// Making sign up  go to Sign up page
signUpBtn.addEventListener('click', gotoSignUp);
function gotoSignUp(e) {
  e.preventDefault();
  window.location.replace('/signUp.html');
}
// Making Sign In go to Dash page
logInBtn.addEventListener('click', gotoDash);
function gotoDash(dash) {
  dash.preventDefault();
  window.location.replace('/Dash.html');
  alert('working');













}
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
// import {
//   getAuth,
//   signInWithEmailAndPassword,
// } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAMz5TdOBI8Z9gYTJgW3I_2RsT_hFbCGc0',
//   authDomain: 'login-page-sociable.firebaseapp.com',
//   projectId: 'login-page-sociable',
//   storageBucket: 'login-page-sociable.appspot.com',
//   messagingSenderId: '537222146046',
//   appId: '1:537222146046:web:26c8dc860739cfdc8202af',
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
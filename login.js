const password = document.getElementById('password');
const email = document.getElementById('email');
const loginForm = document.getElementById('loginForm');
const signUpBtn = document.getElementById('signUpBtn');
const logInBtn = document.getElementById('logInBtn');

const USERS_URL =
  'https://login-page-sociable-default-rtdb.firebaseio.com/users';

const POSTS_URL =
  'https://login-page-sociable-default-rtdb.firebaseio.com/posts';
const EXT = '.json';

loginForm.addEventListener('submit', (e) => {
  let messages = [];

  if (email.value === '' || email.value == null) {
    messages.push('Email is required');
  }

  if (password.value === '' || password.value == null) {
    messages.push('Password is required');
  }

  if (
    password.value.length <= 6 &&
    (password.value !== '' || password.value !== null)
  ) {
    messages.push('Password must be longer than 6 characters');
  }

  //   if (messages.length > 0) {e.preventDefault()errorElement.innerText = messages.join(', ')
  // }
});

var database = firebase.database();
var ref = database.ref(
  'https://login-page-sociable-default-rtdb.firebaseio.com/'
);

ref.on(
  'value',
  function (snapshot) {
    console.log(snapshot.val());
  },
  function (error) {
    console.log('Error: ' + error.code);
  }
);

// // Making sign up  go to Sign up page
// signUpBtn.addEventListener('click', gotoSignUp);
// function gotoSignUp(e) {
//   e.preventDefault();
//   window.location.replace('/signUp.html');
// }
// // Making Sign In go to Dash page
// logInBtn.addEventListener('click', gotoDash);
// function gotoDash(event) {
//   event.preventDefault();
//   window.location.replace('/Dash.html');
//   alert('working');
// }

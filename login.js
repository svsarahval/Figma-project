// const password = document.getElementById('password');
// const email = document.getElementById('email');
// const loginForm = document.getElementById('loginForm');
// const signUpBtn = document.getElementById('signUpBtn');
// const logInBtn = document.getElementById('logInBtn');

// const USERS_URL =
//   'https://login-page-sociable-default-rtdb.firebaseio.com/users';
// const EXT = '.json';

// const getUser = (user) => fetch(`${USERS_URL}/${user.email}${EXT}`);
// const postUser = (user) =>
//   fetch(`${USERS_URL}${EXT}`, {
//     method: 'post',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });

// function browserValidation() {
//   if (!password.value || password.value.length < 6) {
//     return 'password failed';
//   }
//   return null;
// }

// const submitBtn = document.getElementById('submitBtn');
// submitBtn.addEventListener('click', handleLoginSubmit);

// async function handleLoginSubmit(e) {
//   e.preventDefault();
//   e.stopPropagation();

//   const user = {
//     email: email.value,
//     password: password.value,
//   };
//   try {
//     const validationError = browserValidation();
//     if (validationError) {
//       throw Error(validationError);
//     }
//     const checkToSeeIfUserExistsInDatabase = await getUser(user);
//     if (!checkToSeeIfUserExistsInDatabase.ok) {
//       throw Error('Error validating the user');
//     }
//     const userInformationInDatabase =
//       await checkToSeeIfUserExistsInDatabase.json();
//     if (!userInformationInDatabase) {
//       throw Error("Username Doesn't exist");
//     }
//     if (userInformationInDatabase) {
//       localStorage.setItem(
//         'userInfo',
//         JSON.stringify(userInformationInDatabase)
//       );
//       location.replace('/newsFeed.html');
//     }
//   } catch (error) {
//     alert(error);
//   }
// }

// Making sign up  go to Sign up page
signUpBtn.addEventListener('click', gotoSignUp);
function gotoSignUp(e) {
  e.preventDefault();
  window.location.replace('/signUp.html');
}
// Making Sign In go to Dash page
logInBtn.addEventListener('click', gotoDash);
function gotoDash(event) {
  event.preventDefault();
  window.location.replace('/Dash.html');
  alert('working');
}

const password = document.getElementById('password');
const email = document.getElementById('email');
const loginForm = document.getElementById('loginForm');
const signUpBtn = document.getElementById('signUpBtn');
const logInBtn = document.getElementById('logInBtn');

// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const loginBtn = document.getElementById('loginBtn');

// loginBtn.addEventListener('click', async (event) => {
//   event.preventDefault();
//   const userData = {
//     email: email.value,
//     password: password.value,
//   };
  try {
    const response = await fetch(
      'https://login-page-sociable-default-rtdb.firebaseio.com/',
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    if (data.success) {
      // store user information in a secure way
      // redirect to user dashboard
    } else {
      // display an error message
    }
  } catch (error) {
    console.log(error);
  }
});

// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const userData = {
    email: email.value,
    password: password.value,
  };
  try {
    const response = await fetch(
      `https://login-page-sociable-default-rtdb.firebaseio.com/users/check-login?email=${userData.email}&password=${userData.password}`
    );
    if (response.status === 200) {
      const data = await response.json();
      if (data.success) {
        // store user information in a secure way
        // redirect to user dashboard
      } else {
        // display an error message
      }
    } else {
      // display an error message
    }
  } catch (error) {
    console.log(error);
  }
});

// const username = document.getElementById('username');
// const password = document.getElementById('password');

// const USERS_URL =
//   'https://login-page-sociable-default-rtdb.firebaseio.com/users';
// const POSTS_URL =
//   'https://login-page-sociable-default-rtdb.firebaseio.com/posts';
// const EXT = '.json';

// console.log(location);

// const user = {
//   username: 'svsarahval@gmail.com',
//   name: 'Sarah',
// };

// // const validateUser = (user) =>
// //   new Promise((res, rej) => {
// //     setTimeout(() => {
// //       res(JSON.stringify({ user, status: 200, ok: true }));
// //     }, 2000);
// //   });

//   	// fetch(`${URL}${EXT}`)
// 		// .then((resp) => resp.json())
// 		// .then((data) => {
// 		// 	petsObj = { ...data };
// const getUser = (user) => fetch(`${USERS_URL}/${user.username}${EXT}`);
// const postUser = (user) =>
//   fetch(`${USERS_URL}${EXT}`, {
//     method: 'post',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });

// function browserValidation() {
//   if (!password.value || password.value.length < 5) {
//     return 'password failed';
//   }
//   return null;
// }

// // const logInBtn = document.getElementById('loginBtn');
// logInBtn.addEventListener('click', handleLoginBtn);

// async function handleLoginBtn(e) {
//   e.preventDefault();
//   e.stopPropagation();

//   const user = {
//     username: email.value,
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
//       location.replace('Landing.html');
//     }
//   } catch (error) {
//     alert(error);
//   }
// }

// logInBtn.addEventListener('click', function (event) {
//   event.preventDefault();

//   // Get the email and password values
//   const emailValue = email.value;
//   const passwordValue = password.value;

//   // Send a POST request to the server-side script with the email and password values
//   fetch('https://login-page-sociable-default-rtdb.firebaseio.com/users', {
//     method: 'POST',
//     // cors.supportedMethods,
//     // cors.allowOrigin,
//     body: JSON.stringify({
//       email: emailValue,
//       password: passwordValue,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Check the response from the server-side script
//       if (data.status === 'success') {
//         // Login successful, redirect the user to the dashboard or show a success message
//         window.location.href = '/dashboard';
//       } else {
//         // Login failed, show an error message
//         alert('Invalid email or password. Please try again.');
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

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

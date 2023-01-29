const password = document.getElementById('password');
const userName = document.getElementById('userName');
const loginForm = document.getElementById('loginForm');
const signUpBtn = document.getElementById('signUpBtn');
const logInBtn = document.getElementById('logInBtn');

logInBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const userData = {
    username: userName.value,
    password: password.value,
  };
  try {
    const response = await fetch(
      'https://login-page-sociable-default-rtdb.firebaseio.com/users.json',
      {
        method: 'POST',
        // mode: 'no-cors',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    if (response.ok) {
      // store user information in a secure way
      localStorage.setItem('userInfo', JSON.stringify(data));
      // redirect to user dashboard
      window.location.replace('Dash.html');
    } else {
      // display an error message
    }
  } catch (error) {
    console.log(error);
  }
});

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

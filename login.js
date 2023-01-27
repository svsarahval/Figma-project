const password = document.getElementById('password');
const email = document.getElementById('email');
const loginForm = document.getElementById('loginForm');
const signUpBtn = document.getElementById('signUpBtn');
const logInBtn = document.getElementById('logInBtn');

  let userData = [
    {
      email: 'svsarahval@gmail.com',
      password: 'password',
    },
    {
      email: 'KLat@gmail.com',
      password: 'password',
    },
    {
      email: 'kikijohnson@gmail.com',
      password: 'password',
    },
    {
      email: 'NathTate2@gmail.com',
      password: 'password',
    },
  ];

  function handleFormSubmit(){
    
  }













// Making sign up  go to Sign up page
signUpBtn.addEventListener('click', gotoSignUp);
function gotoSignUp(e) {
  e.preventDefault();
  window.location.replace('/signUp.html');
}
// Making Sign In go to Dash page
// logInBtn.addEventListener('click', gotoDash);
// function gotoDash(dash) {
//   dash.preventDefault();
//   window.location.replace('/Dash.html');
//   alert('working');
// }

// validate email and password
// let emailValue = email.value;
// let passwordValue = password.value;

// loginForm.addEventListener('click', gotoDash);

// function gotoDash(e) {
//   e.preventDefault();
//   let isValid = false;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].email === emailValue && users[i].password === passwordValue) {
//       isValid = true;
//       break;
//     }
//   }

//   if ((isValid /= true)) {
//     alert('Invalid email or password');
//   } else {
//     window.location.href = 'Dash.html';
//   }
}

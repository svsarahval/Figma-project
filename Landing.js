// Query List
const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');

// Making sign up go to Sign up page
signUpBtn.addEventListener('click', gotoSignUp);
function gotoSignUp(e) {
 e.preventDefault()
  window.location.replace('/signUp.html');

}

signInBtn.addEventListener('click', gotoSignIn);
function gotoSignIn (logIn){
 logIn.preventDefault()
 window.location.replace('/login.html');
}

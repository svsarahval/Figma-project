const USER_URL = 'https://login-page-sociable-default-rtdb.firebaseio.com/';
const EXT = `.json`;

const submitBtn = document.getElementById('submitBtn');
const confPass = document.getElementById('confPass');
const password = document.getElementById('password');
const birthDate = document.getElementById('birthDate');
const email = document.getElementById('email');
const lastName = document.getElementById('lastName');
const firstName = document.getElementById('firstName');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let newUser = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    birthDate: birthDate.value,
    confPass: confPass.value,
  };

  fetch(`${USER_URL}${EXT}`, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(newUser);
      window.location.href = 'Dash.html';
    })
    .catch((error) => {
      console.error(error);
    });
});

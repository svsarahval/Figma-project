const submitBtn = document.getElementById('submitBtn');
const confPass = document.getElementById('confPass');
const password = document.getElementById('password');
const birthDate = document.getElementById('birthDate');
const email = document.getElementById('email');
const lastName = document.getElementById('lastName');
const firstName = document.getElementById('firstName');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let newUser= {
     firstName: firstName.value,
     lastName: lastName.value,
     email: email.value,
     password: password.value,
     birthDate: birthDate.value,
     confPass: confPass.value
    }
}
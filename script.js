let email = document.getElementById("email");
let password = document.getElementById("password");

//validate email
function validateEmail() {
    let emailInput = email.value;
    let error = document.getElementById("error");

    if(emailInput.length > 3 && emailInput.includes('@') && emailInput.includes('.')){
        error.textContent = '';
    }
    else {
        error.textContent = 'Make sure email is more than 3 characters and has @ and a .'
    }
    console.log(emailInput)
}

//Validate Password
function validatePassword() {
    let passwordInput = password.value;
    let error = document.getElementById("password-error");

    if(passwordInput.length < 8) {
        error.textContent = "Make sure password is more than 8 characters.";
    }
    else {
        error.textContent = "All good to go";
        error.style.color = "green";
    }
}

function submitForm() {
    let userConfirmation = confirm("Are you sure you want to submit this form?");

    if(userConfirmation){
        alert("Successful submission");
    }
    else {
        email.value = "";
        password.value = "";
        window.location.href = window.location.href; // Refresh the page
    }
}


//stap:-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address inside the email input field
    //aways remember to use .value to get text from an input
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step-2: get password inside the password input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //DANGER: do not verify email & password on the client side
    //step-4: verify email and password
    if(email === 'sontan@baap.com' && password === 'rafin'){
        window.location.href = 'bank.html';
    }
    else{
        alert(' toke ami latti marlam, toi password bule dicos');
    }
})
















document.getElementById('togglePassword').addEventListener('click', function() {
    let passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        this.classList.remove('fa-eye-slash');
    }
});

function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    
    emailError.textContent = "";
    passwordError.textContent = "";
    
    let valid = true;
    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        valid = false;
    }
    
    if (valid) {
        alert("Login Successful!");
    }
}

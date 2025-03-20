// Toggle password visibility for Password and Confirm Password
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

document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
    let confirmPasswordField = document.getElementById('confirmPassword');
    if (confirmPasswordField.type === 'password') {
        confirmPasswordField.type = 'text';
        this.classList.add('fa-eye-slash');
    } else {
        confirmPasswordField.type = 'password';
        this.classList.remove('fa-eye-slash');
    }
});

// Signup form validation
function validateSignupForm() {
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let valid = true;

    // Full Name Validation
    if (fullName.length < 3) {
        nameError.textContent = "Full Name must be at least 3 characters long";
        valid = false;
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    // Phone Number Validation (Must be 10 digits)
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Enter a valid 10-digit phone number";
        valid = false;
    }

    // Password Validation
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        valid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        valid = false;
    }

    if (valid) {
        alert("Signup Successful!");
    }
}

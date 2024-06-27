// Function to validate the form on submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    clearErrors();

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate each field
    let valid = true;

    if (fullName.length < 5) {
        showError('fullNameError', 'Name must be at least 5 characters long.');
        valid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', 'Enter a valid email address.');
        valid = false;
    }

    if (!validatePhone(phone)) {
        showError('phoneError', 'Enter a valid 10-digit phone number.');
        valid = false;
    }

    if (!validatePassword(password, fullName)) {
        showError('passwordError', 'Password must be at least 8 characters and cannot be "password" or your name.');
        valid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        valid = false;
    }

    // If all fields are valid, submit the form
    if (valid) {
        alert('Form submitted successfully!');
        // You can proceed with form submission here (e.g., using AJAX or simply form.submit())
        document.getElementById('registrationForm').submit();
    }
});

// Function to clear error messages
function clearErrors() {
    document.getElementById('fullNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
}

// Function to show error messages
function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

// Function to validate email
function validateEmail(email) {
    // Simple email validation check
    return email.includes('@');
}

// Function to validate phone number
function validatePhone(phone) {
    // Phone number should be 10 digits and not "123456789"
    return /^\d{10}$/.test(phone) && phone !== '1234567890';
}

// Function to validate password
function validatePassword(password, name) {
    // Password must be at least 8 characters and not "password" or the user's name
    return password.length >= 8 && password.toLowerCase() !== 'password' && password.toLowerCase() !== name.toLowerCase();
}

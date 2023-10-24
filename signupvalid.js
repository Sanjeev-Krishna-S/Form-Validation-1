function validateForm() {
    const emailInput = document.getElementById("email");
    const phoneNumberInput = document.getElementById("mobileNumber");
    const passwordInput = document.getElementById("password");
    const passwordStrength = document.getElementById("password-strength");

    // Initial states: hide the error messages
    emailInput.classList.remove("is-invalid");
    phoneNumberInput.classList.remove("is-invalid");

    // Email Validation
    emailInput.addEventListener("input", function () {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;

        if (email.trim() === "") {
            emailInput.classList.remove("is-invalid");
        } else if (emailRegex.test(email)) {
            emailInput.classList.remove("is-invalid");
        } else {
            emailInput.classList.add("is-invalid");
        }
    });

    // Phone Number Validation
    phoneNumberInput.addEventListener("input", function () {
        const phoneNumber = phoneNumberInput.value;
        const phoneRegex = /^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;

        if (phoneNumber.trim() === "") {
            phoneNumberInput.classList.remove("is-invalid");
        } else if (phoneRegex.test(phoneNumber)) {
            phoneNumberInput.classList.remove("is-invalid");
        } else {
            phoneNumberInput.classList.add("is-invalid");
        }
    });

    // Password Validation
    let isTyping = false; // To track if the user is typing
    passwordInput.addEventListener("input", function () {
        isTyping = true; // User is typing

        const password = passwordInput.value;
        const passwordStrengthText = document.getElementById("password-strength-text");

        // Use a regular expression to check for password requirements
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;

        if (isTyping) {
            // Show password strength only when the user is typing
            passwordStrength.style.display = "block";
        }

        if (password === "") {
            // Hide the strength indicator if the password field is empty
            passwordStrength.style.display = "none";
        } else if (strongRegex.test(password)) {
            passwordStrengthText.innerText = "Strong";
            passwordStrength.style.backgroundColor = "green";
        } else if (mediumRegex.test(password)) {
            passwordStrengthText.innerText = "Medium";
            passwordStrength.style.backgroundColor = "orange";
        } else {
            passwordStrengthText.innerText = "Weak";
            passwordStrength.style.backgroundColor = "red";
        }
    });

    // Hide password strength when the password field is not focused
    passwordInput.addEventListener("blur", function () {
        isTyping = false; // User stopped typing
        passwordStrength.style.display = "none";
    });

    // Add event listener to the form submission
    document.getElementById("yourFormId").addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            // Redirect to the index page after successful form submission
            window.location.href = "index.html"; // Replace with the actual URL of your index page
        }
    });
}

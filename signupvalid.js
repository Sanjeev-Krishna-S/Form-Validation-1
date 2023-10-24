document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector("#login-form button[type='submit']");

    // Email Validation
    emailInput.addEventListener("input", function() {
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

    // Form submission validation
    loginButton.addEventListener("click", function(event) {
        if (passwordInput.value.trim() === "") {
            event.preventDefault(); // Prevent the form from being submitted
            document.querySelector(".invalid-feedback-password").style.display = "block"; // Show the error message
        } else {
            document.querySelector(".invalid-feedback-password").style.display = "none"; // Hide the error message if the password is entered
        }
    });
});

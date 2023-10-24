document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");

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
});

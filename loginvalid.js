document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const passwordStrength = document.getElementById("password-strength");
    const passwordStrengthText = document.getElementById("password-strength-text");

    // Password Validation
    let isTyping = false; // To track if the user is typing
    passwordInput.addEventListener("input", function() {
        isTyping = true; // User is typing

        const password = passwordInput.value;
        
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;

        if (isTyping) {
            passwordStrength.style.display = "block";
        }

        if (password === "") {
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

    passwordInput.addEventListener("blur", function() {
        isTyping = false;
        passwordStrength.style.display = "none";
    });
});

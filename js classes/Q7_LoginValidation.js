"use strict";

// Q7: Username and password validation using RegExp.
document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("loginPassword").value;
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const result = document.getElementById("loginResult");

    const usernameValid = /^.{5,}$/.test(username);
    const passwordErrors = [];

    if (password.length < 8) passwordErrors.push("at least 8 characters");
    if (!/[0-9]/.test(password)) passwordErrors.push("one number");
    if (!/[A-Z]/.test(password)) passwordErrors.push("one uppercase letter");
    if (!/[a-z]/.test(password)) passwordErrors.push("one lowercase letter");
    if (!/[^A-Za-z0-9]/.test(password)) passwordErrors.push("one special character");

    usernameError.textContent = usernameValid ? "" : "Username must be at least 5 characters.";
    passwordError.textContent = passwordErrors.length
        ? `Password must contain ${passwordErrors.join(", ")}.`
        : "";

    if (usernameValid && passwordErrors.length === 0) {
        result.className = "success";
        result.textContent = "Validation successful!";
    } else {
        result.className = "error";
        result.textContent = "Please fix the errors above.";
    }
});

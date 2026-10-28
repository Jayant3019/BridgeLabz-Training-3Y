"use strict";

// Q2: Validate each field with regular expressions.
const studentForm = document.getElementById("studentForm");

const studentRules = {
    name: {
        regex: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
        message: "Use alphabets only."
    },
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email, e.g. example@domain.com."
    },
    phone: {
        regex: /^\d{10}$/,
        message: "Phone must contain exactly 10 digits."
    },
    password: {
        regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        message: "Password needs an uppercase letter, a number, and a special character."
    }
};

function validateStudentField(fieldName) {
    const input = document.getElementById(fieldName);
    const error = document.getElementById(`${fieldName}Error`);
    const rule = studentRules[fieldName];
    const isValid = rule.regex.test(input.value.trim());

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    error.textContent = isValid ? "" : rule.message;
    return isValid;
}

Object.keys(studentRules).forEach(fieldName => {
    document.getElementById(fieldName).addEventListener("input", () => {
        validateStudentField(fieldName);
    });
});

studentForm.addEventListener("submit", event => {
    event.preventDefault();
    const allValid = Object.keys(studentRules).map(validateStudentField).every(Boolean);
    const result = document.getElementById("result");

    if (allValid) {
        result.style.color = "green";
        result.textContent = "Registration form is valid!";
    } else {
        result.style.color = "red";
        result.textContent = "Please correct the highlighted fields.";
    }
});

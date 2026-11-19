// Q9: Prevent invalid form submission and show live inline validation errors.
const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("userName");
const emailInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("userPassword");
const successMessage = document.getElementById("formSuccess");

const validationFields = [
    {
        input: nameInput,
        error: document.getElementById("userNameError"),
        validate: value => value.trim() ? "" : "Name is required."
    },
    {
        input: emailInput,
        error: document.getElementById("userEmailError"),
        validate: value => {
            if (!value.trim()) return "Email is required.";
            if (!value.includes("@")) return "Email must contain @.";
            return "";
        }
    },
    {
        input: passwordInput,
        error: document.getElementById("userPasswordError"),
        validate: value => {
            if (!value) return "Password is required.";
            if (value.length < 6) return "Password must be at least 6 characters.";
            return "";
        }
    }
];

function validateField(field) {
    const errorMessage = field.validate(field.input.value);
    field.error.textContent = errorMessage;
    return errorMessage === "";
}

// As the user corrects a field, validate it again and clear its error.
validationFields.forEach(field => {
    field.input.addEventListener("input", () => {
        validateField(field);
        successMessage.textContent = "";
    });
});

registrationForm.addEventListener("submit", event => {
    // Stop the browser from submitting/reloading the page.
    event.preventDefault();

    const allFieldsValid = validationFields
        .map(validateField)
        .every(isValid => isValid);

    if (!allFieldsValid) {
        successMessage.textContent = "";
        return;
    }

    successMessage.textContent = "Form Submitted Successfully";
    registrationForm.reset();
});

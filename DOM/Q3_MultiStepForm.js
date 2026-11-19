// Q3: Three-step form with validation and a final summary.
const formSteps = [...document.querySelectorAll(".step")];
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const summary = document.getElementById("summary");
let currentStep = 0;

const fields = [
    document.getElementById("name"),
    document.getElementById("email"),
    document.getElementById("password")
];

function showStep(stepIndex) {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === stepIndex);
    });
    backButton.hidden = stepIndex === 0;
    nextButton.textContent = stepIndex === formSteps.length - 1 ? "Finish" : "Next";
}

function validateCurrentStep() {
    const field = fields[currentStep];
    const value = field.value.trim();
    const errorElement = document.getElementById(`${field.id}Error`);

    let errorMessage = "";
    if (!value) {
        errorMessage = "This field is required.";
    } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMessage = "Enter a valid email address.";
    } else if (field.type === "password" && value.length < 6) {
        errorMessage = "Password must contain at least 6 characters.";
    }

    errorElement.textContent = errorMessage;
    return errorMessage === "";
}

nextButton.addEventListener("click", () => {
    if (!validateCurrentStep()) return;

    if (currentStep < formSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
        fields[currentStep].focus();
    } else {
        summary.hidden = false;
        summary.innerHTML = `
            <h3>Registration Summary</h3>
            <p>Name: ${escapeHtml(fields[0].value)}</p>
            <p>Email: ${escapeHtml(fields[1].value)}</p>
            <p>Password: ${"*".repeat(fields[2].value.length)}</p>
            <p class="success">All steps completed successfully!</p>
        `;
        formSteps.forEach(step => step.hidden = true);
        nextButton.hidden = true;
        backButton.hidden = true;
    }
});

backButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

fields.forEach(field => {
    field.addEventListener("input", () => {
        document.getElementById(`${field.id}Error`).textContent = "";
    });
});

function escapeHtml(value) {
    return value.replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
}

showStep(currentStep);

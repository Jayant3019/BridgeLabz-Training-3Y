"use strict";

// Q4: Generate a form from field configuration objects.
class FormBuilder {
    constructor(fields, containerId, outputId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
        this.output = document.getElementById(outputId);
        this.renderForm();
    }

    renderForm() {
        const fieldMarkup = this.fields.map((field, index) => {
            const fieldId = `field-${index}`;
            const safeLabel = field.label.replace(/[&<>"']/g, char => ({
                "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
            }[char]));
            const type = ["text", "email", "password", "number"].includes(field.type) ? field.type : "text";
            return `<label for="${fieldId}">${safeLabel}</label>
                    <input id="${fieldId}" name="${field.name}" type="${type}" ${field.required ? "required" : ""}>`;
        }).join("");

        this.container.innerHTML = `<form id="generatedForm">${fieldMarkup}<button type="submit">Submit</button></form>`;

        document.getElementById("generatedForm").addEventListener("submit", event => {
            event.preventDefault();
            this.output.textContent = JSON.stringify(this.getFormData(), null, 2);
        });
    }

    getFormData() {
        const formData = {};
        this.fields.forEach((field, index) => {
            const input = document.getElementById(`field-${index}`);
            formData[field.name] = input.value;
        });
        return formData;
    }
}

const formFields = [
    { type: "text", label: "Username", name: "username", required: true },
    { type: "email", label: "Email", name: "email", required: true },
    { type: "password", label: "Password", name: "password", required: true }
];

new FormBuilder(formFields, "formContainer", "formOutput");

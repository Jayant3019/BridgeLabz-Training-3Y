"use strict";

// Q8: Form submission updates the user object in real time.
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const userOutput = document.getElementById("userOutput");

function displayUser() {
    userOutput.textContent = JSON.stringify(user, null, 2);
}

displayUser();

userForm.addEventListener("submit", event => {
    event.preventDefault();

    // Update existing object properties with the latest form values.
    user.name = document.getElementById("userName").value.trim();
    user.email = document.getElementById("userEmail").value.trim();
    user.age = Number(document.getElementById("userAge").value);

    displayUser();
});

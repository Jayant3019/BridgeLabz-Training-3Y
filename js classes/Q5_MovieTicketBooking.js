"use strict";

// Q5: Validate and store booking details in an object.
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("bookingName").value.trim();
    const email = document.getElementById("bookingEmail").value.trim();
    const seatsText = document.getElementById("seats").value.trim();
    const seats = Number(seatsText);

    const nameValid = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const seatsValid = /^\d+$/.test(seatsText) && seats >= 1 && seats <= 10;

    document.getElementById("nameError").textContent = nameValid ? "" : "Use alphabets only.";
    document.getElementById("emailError").textContent = emailValid ? "" : "Enter a valid email address.";
    document.getElementById("seatsError").textContent = seatsValid ? "" : "Choose a whole number from 1 to 10.";

    const ticket = document.getElementById("ticket");
    if (!nameValid || !emailValid || !seatsValid) {
        ticket.textContent = "Please correct the errors above.";
        return;
    }

    const booking = { name, email, seats };
    ticket.innerHTML = "";
    const heading = document.createElement("h2");
    heading.textContent = "Booking Confirmed";
    const details = document.createElement("p");
    details.textContent = `Name: ${booking.name} | Email: ${booking.email} | Seats: ${booking.seats}`;
    ticket.append(heading, details);
});

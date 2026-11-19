// Q8: Custom dropdown without a <select> element.
// The document listener uses capture=true so outside clicks are handled early.
const dropdown = document.getElementById("customDropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");

dropdownButton.addEventListener("click", event => {
    event.stopPropagation();
    const isOpen = dropdownOptions.classList.toggle("open");
    dropdownButton.setAttribute("aria-expanded", String(isOpen));
});

dropdownOptions.addEventListener("click", event => {
    const selectedOption = event.target.closest(".dropdown-option");
    if (!selectedOption) return;

    dropdownButton.textContent = selectedOption.textContent;
    dropdownOptions.classList.remove("open");
    dropdownButton.setAttribute("aria-expanded", "false");
});

// Capturing phase: document sees the click before it reaches target/bubbles.
document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) {
        dropdownOptions.classList.remove("open");
        dropdownButton.setAttribute("aria-expanded", "false");
    }
}, true);

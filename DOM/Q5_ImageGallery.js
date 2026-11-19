// Q5: Image gallery modal. Click the backdrop to close; clicks inside do not.
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");
const closeModalButton = document.getElementById("closeModal");

gallery.addEventListener("click", event => {
    const clickedImage = event.target.closest("img");
    if (!clickedImage) return;

    modalImage.src = clickedImage.src;
    modalImage.alt = clickedImage.alt;
    modal.classList.add("open");
});

modal.addEventListener("click", () => {
    modal.classList.remove("open");
});

// Stop the click from bubbling to the modal backdrop.
modalContent.addEventListener("click", event => {
    event.stopPropagation();
});

closeModalButton.addEventListener("click", () => {
    modal.classList.remove("open");
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") modal.classList.remove("open");
});

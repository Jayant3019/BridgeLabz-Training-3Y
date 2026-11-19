// Q7: Track mouse coordinates and place a red dot on double-click.
const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", event => {
    coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

mouseBox.addEventListener("dblclick", event => {
    const boxRectangle = mouseBox.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "mouse-dot";

    // Convert viewport coordinates into coordinates relative to the box.
    dot.style.left = `${event.clientX - boxRectangle.left}px`;
    dot.style.top = `${event.clientY - boxRectangle.top}px`;
    mouseBox.appendChild(dot);
});

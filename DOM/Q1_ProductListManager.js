// Q1: Add, edit and delete products using event delegation.
const productInput = document.getElementById("productInput");
const addProductButton = document.getElementById("addProduct");
const productList = document.getElementById("productList");
let activeEditItem = null;

function saveEditedItem() {
    if (!activeEditItem) return;
    const editInput = activeEditItem.querySelector(".edit-input");
    const newName = editInput.value.trim();

    if (newName) {
        const nameSpan = document.createElement("span");
        nameSpan.className = "product-name";
        nameSpan.textContent = newName;
        editInput.replaceWith(nameSpan);
    } else {
        // Empty edits are cancelled and the previous text is restored.
        const oldName = activeEditItem.dataset.originalName || "Unnamed product";
        const nameSpan = document.createElement("span");
        nameSpan.className = "product-name";
        nameSpan.textContent = oldName;
        editInput.replaceWith(nameSpan);
    }
    activeEditItem.classList.remove("editing");
    activeEditItem = null;
}

function addProduct(name) {
    const cleanedName = name.trim();
    if (!cleanedName) return;

    const listItem = document.createElement("li");
    listItem.className = "product-item";

    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = cleanedName;

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.dataset.action = "edit";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    listItem.append(nameSpan, editButton, deleteButton);
    productList.appendChild(listItem);
}

addProductButton.addEventListener("click", () => {
    addProduct(productInput.value);
    productInput.value = "";
    productInput.focus();
});

productInput.addEventListener("keydown", event => {
    if (event.key === "Enter") addProductButton.click();
});

// One listener on the parent UL handles clicks for all current/future buttons.
productList.addEventListener("click", event => {
    const actionButton = event.target.closest("button[data-action]");
    if (!actionButton) return;

    const listItem = actionButton.closest("li");
    if (actionButton.dataset.action === "delete") {
        if (activeEditItem === listItem) activeEditItem = null;
        listItem.remove();
    } else if (actionButton.dataset.action === "edit") {
        if (activeEditItem && activeEditItem !== listItem) saveEditedItem();
        if (listItem.classList.contains("editing")) {
            saveEditedItem();
            return;
        }

        const nameSpan = listItem.querySelector(".product-name");
        listItem.dataset.originalName = nameSpan.textContent;
        const editInput = document.createElement("input");
        editInput.className = "edit-input";
        editInput.value = nameSpan.textContent;
        nameSpan.replaceWith(editInput);
        listItem.classList.add("editing");
        activeEditItem = listItem;
        editInput.focus();
        editInput.addEventListener("keydown", keyEvent => {
            if (keyEvent.key === "Enter") saveEditedItem();
            if (keyEvent.key === "Escape") {
                editInput.value = "";
                saveEditedItem();
            }
        });
    }
});

// Clicking outside the currently edited list item auto-saves the edit.
document.addEventListener("click", event => {
    if (activeEditItem && !activeEditItem.contains(event.target)) {
        saveEditedItem();
    }
});

// Q6: Filter table rows in real time, ignoring letter case.
const searchInput = document.getElementById("searchInput");
const studentRows = [...document.querySelectorAll("#studentRows tr")];
const noResultsMessage = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleRows = 0;

    studentRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        const matches = rowText.includes(searchTerm);
        row.hidden = !matches;
        if (matches) visibleRows++;
    });

    noResultsMessage.hidden = visibleRows !== 0;
});

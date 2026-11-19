// Q4: Theme switcher using setAttribute() for body attributes.
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const themeStatus = document.getElementById("themeStatus");

function applyTheme(themeName) {
    const validThemes = ["light", "dark", "blue"];
    if (!validThemes.includes(themeName)) return;

    // setAttribute() updates both the class and the custom data-theme attribute.
    document.body.setAttribute("class", `theme-${themeName}`);
    document.body.setAttribute("data-theme", themeName);
    themeStatus.textContent = `Current theme: ${themeName}`;
}

themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        applyTheme(button.dataset.themeChoice);
    });
});

applyTheme("light");

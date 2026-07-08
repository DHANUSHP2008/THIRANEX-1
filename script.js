function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");

    if (current === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}
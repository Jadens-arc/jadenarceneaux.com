function setTheme(mode) {
    localStorage.setItem("theme-storage", mode);
    if (mode === "dark") {
        document.getElementById("darkModeStyle").disabled=false;
        document.getElementById("dark-mode-toggle").innerHTML = "<i data-feather=\"sun\"></i>";
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#202124")
        feather.replace()
    } else if (mode === "light") {
        document.getElementById("darkModeStyle").disabled=true;
        document.getElementById("dark-mode-toggle").innerHTML = "<i data-feather=\"moon\"></i>";
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "white")
        feather.replace()
    }
}

function toggleTheme() {
    if (localStorage.getItem("theme-storage") === "light") {
        setTheme("dark");
    } else if (localStorage.getItem("theme-storage") === "dark") {
        setTheme("light");
    }
}

let theme = localStorage.getItem("theme-storage");

if (!theme) {
    theme = (window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
}

setTheme(theme);

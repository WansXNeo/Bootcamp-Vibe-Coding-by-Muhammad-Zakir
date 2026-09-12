const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


// ================================
// DARK / LIGHT MODE
// ================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀";
}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
        document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        themeToggle.textContent = "☀";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeToggle.textContent = "☾";

        localStorage.setItem(
            "theme",
            "light"
        );
    }

});


// ================================
// MOBILE NAVIGATION
// ================================

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Menutup menu setelah memilih navigasi

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});

#PROMPT 1#
Saya ingin membuat landing page portofolio pribadi saya menggunakan HTML, CSS, dan JavaScript sederhana dengan struktur project sebagai berikut:
Tugas/
├─ index.html (halaman utama)
├─ style.css (berkas CSS untuk styling)
├─ script.js (berkas JavaScript untuk interaktivitas)
├─ assets/
│ └─ gambar-saya.png
└─ README.md (dokumentasi singkat project)
saya ingin ketika dilihat bukan hanya user (orang it) yang memahami teknis website menilai dengan layout, responsivitas dan design namun juga berfokus pada sisi hr yang tidak memahami dari sisi teknis sebagai orang IT yang menilai berdasarkan design dan isi dari website, saya ingin visual dari website saya sederhana, memiliki visual kombinasi warna pallete yang harmonis dengan 2 mode yaitu dark mode dan light mode, kombinasi warna tidak berlebihan dibatasi maksimal 4 kombinasi warna dengan utama yaitu hitam dan putih yang dapat disesuaikan sesuai mode warna yang dipilih (dark mode atau light mode), Landing page memiliki minimal tiga bagian (section): hero (bagian pembuka utama), fitur, dan kontak/ajakan bertindak (call to action), Tampilan responsif tetap terlihat rapi baik ketika dibuka melalui ponsel maupun laptop, Berikan kode HTML dan CSS-nya secara terpisah, beserta penjelasan singkat untuk setiap bagian CSS.

#PROMPT 2#
jelaskan kepada saya bagaimana cara membaca alur script ini
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

#PROMPT 3
jelaskan kepada saya dalam 1 paragph singkat

#PROMPT 4
berikan saya penjelasan seperti saya orang awam

#PROMPT 5
berikan saya penjelasan seperti saya anak umur 10 tahun

#PROMPT 6
buatkan saya script bagaimana cara saya akan menjelaskan kepada hr dan bagaimana cara menjelaskan kepada atasan (user)

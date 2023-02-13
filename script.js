const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

// ?======= SHOW-MENU-TOGGLER ==========
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    showMenu();
  });
}
function showMenu() {
  navLinks.classList.toggle("active");
}

// ?======= COLSE AFTER LINKS CLICKED ==========
const links = document.querySelectorAll("#link");
if (menuBtn) {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// ?======= DARK-MODE-TOGGLER ==========

const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", () => {
  darkTheme();
});

function darkTheme() {
  document.body.classList.toggle("dark-theme");
}

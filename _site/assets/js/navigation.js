document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".mobile-menu-toggle");
    const navList = document.querySelector(".nav-list");

    const toggleNav = () => navList.classList.toggle("open");

    if (toggleBtn && navList) {
        toggleBtn.addEventListener("click", toggleNav);
    }
});

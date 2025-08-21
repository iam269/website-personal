// Nu mai există funcționalitate pentru meniul hamburger, rămâne doar portofoliul.
// Script pentru meniul hamburger pe mobil
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('menu-open');
    menuToggle.classList.toggle('open');
  });
}

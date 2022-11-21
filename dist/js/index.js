//navbar fixed

window.onscroll = function () {
  const header = document.querySelector('header');
  const toTop = document.querySelector('#toTop');
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
// dark mode
const toggleMode = document.querySelector('#toggle');
const html = document.querySelector('html');
const toggleIcons = document.querySelector('.toggle__icons');
document.addEventListener('click', function () {
  toggleMode.checked
    ? html.classList.add('dark')
    : html.classList.remove('dark');
  html.classList.contains('dark')
    ? toggleIcons.classList.replace('fa-sun', 'fa-moon')
    : toggleIcons.classList.replace('fa-moon', 'fa-sun');
});
// click outside hamburger
// window.addEventListener('click', function (e) {
//   if (e.target != hamburger && e.target != navMenu) {
//     hamburger.classList.remove('hamburger-active');
//     navMenu.classList.add('hidden');
//   }
// })

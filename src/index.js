import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

const homeLink = document.querySelector(".home-link");
const menuLink = document.querySelector(".menu-link");
const contactLink = document.querySelector(".contact-link");

homeLink.classList.add('active');
loadHome();

homeLink.addEventListener('click', () => {
    loadHome();
    homeLink.classList.add('active');
    menuLink.classList.remove('active');
    contactLink.classList.remove('active');
})

menuLink.addEventListener('click', () => {
    loadMenu();
    homeLink.classList.remove('active');
    menuLink.classList.add('active');
    contactLink.classList.remove('active');
})

contactLink.addEventListener('click', () => {
    loadContact();
    homeLink.classList.remove('active');
    menuLink.classList.remove('active');
    contactLink.classList.add('active');
})
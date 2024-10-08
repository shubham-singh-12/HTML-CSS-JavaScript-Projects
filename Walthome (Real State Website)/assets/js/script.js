'use strict';

// NAVBAR TOGGLE IN MOBILE
const $navbar = document.querySelector("[data-navbar]"); 
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));


// HEADER SCROLL STATE
const $header = document.querySelector("[data-header");

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});
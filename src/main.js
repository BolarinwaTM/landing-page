window.addEventListener('DOMContentLoaded', () => {
// MENU SHOW Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


// MENU SHOW
// Validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navToggle.style.display = ""
    })
}


// MENU HIDDEN
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        navToggle.style.display = "none";
    })
}


// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const nav = document.getElementById('header')
        // When the scroll is greater than 80 viewport height, add the scroll-header class
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)



// SHOW SCROLL TOP
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('scroll-top');
    else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)



// TOGGLE DARK THEME
const navSun = document.getElementById('nav-sun')
const navMoon = document.getElementById('theme-button')
const Body = document.body

if(navMoon){
    navMoon.addEventListener('click', () =>{
        Body.classList.add('dark-theme');
        navSun.classList.add('show-sun');
        navMoon.style.display = "none";
    })
}

if(navSun){
    navSun.addEventListener('click', () =>{
        Body.classList.remove('dark-theme');
        navMoon.style.display = "flex";
        navSun.classList.remove('show-sun');
    })
}


})
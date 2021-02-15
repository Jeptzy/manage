const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav_menu');

burger.addEventListener('click', function(){
    navMenu.classList.toggle('show_nav');
    burger.classList.toggle('lineclose')
})

let slideIndex = 0;
let slider = document.querySelector(".slider");
let slides = document.querySelector(".slider_wrapper");
let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots .dot")



function plusslide(position) {
    slideIndex += position;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add("dot-active");
}

function currentslide(index) {
    if (index > slide.length) {
        index = 1;
    }
    else if (index < 1) {
        index = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${index - 1}00%`;
    dots[index - 1].classList.add("dot-active");

    slideIndex = index;
}
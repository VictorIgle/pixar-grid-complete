'use strict'


const button = document.querySelector('.Menu-buton')
const nav    = document.querySelector('.Header-nav')
const head   = document.querySelector('.Header')

button.addEventListener('click' , () =>{
    button.classList.toggle('active');
    nav.classList.toggle('visible');
    head.classList.toggle('active')
})




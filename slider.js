const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
 
let slideNumber = 1;

right.addEventListener('click',()=>{
   slider.style.transform = `translateX(-650px)`;
})

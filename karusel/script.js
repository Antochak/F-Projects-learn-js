let buttonLeft = document.querySelector('.main').firstElementChild
let buttonRight = document.querySelector('.main').lastElementChild
let display = document.querySelector('.display')

function righter() {
    display.scrollLeft += 390;
}
function lefter() {
    display.scrollLeft -= 390; 
}
buttonRight.addEventListener('click', () => righter)
buttonLeft.addEventListener('click', () => lefter)


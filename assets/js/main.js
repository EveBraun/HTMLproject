const modal = document.querySelector('.modal');
const btn = document.querySelector('.footer__button');
const close = modal.querySelector('.modal__close');
const html = document.querySelector('html');


function removeModal() {
    modal.classList.remove('modal--open');
    html.classList.remove('no-scroll');
}

btn.addEventListener('click', (event) => {
    event.preventDefault(); // чтобы отменить действие браузера по-умолчанию при этом событии (актуально для ссылок, отправки формы)
    modal.classList.add('modal--open');
    html.classList.add('no-scroll');  // добавляем класс no-scroll для того, чтобы отключить скроллинг при открытии модального окна
}); 


close.addEventListener('click', removeModal)


// при нажатии на Escape модальное окно закрывается
document.addEventListener('keydown', (event) => {
    if (event.key = 'Escape') {
        removeModal();
    }
})

// при нажатии на подложку модальное окно закрывается
modal.addEventListener('click', (e)=> {
    if (e.target == modal) {
        removeModal();
    }
})



//СЛАЙДЕР

window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".filters__slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.value = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = sliderTwo.value;
    fillColor();
}

function rangeOne(){
    let value = +displayValOne.value;
    if (value < +displayValOne.getAttribute('min')) {
        value = +displayValOne.getAttribute('min')
    } else if (value > +displayValOne.getAttribute('max')) {
        value = +displayValOne.getAttribute('max')
    } 
    
    if (value > +displayValTwo.value) {
        value = +displayValTwo.value
    }
    sliderOne.value = value;
    displayValOne.value = value;
    fillColor();
}

function rangeTwo(){
    let value = +displayValTwo.value;
    if (value < +displayValTwo.getAttribute('min')) {
        value = +displayValTwo.getAttribute('min')
    } else if (value > +displayValTwo.getAttribute('max')) {
        value = +displayValTwo.getAttribute('max')
    }
    if (value < +displayValOne.value) {
        value = +displayValOne.value
    }
    sliderTwo.value = value;
    displayValTwo.value = value;
    fillColor();
}

function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #D7DCDF ${percent1}% , #00CA74 ${percent1}% , #00CA74 ${percent2}%, #D7DCDF ${percent2}%)`;
}







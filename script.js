// slider
const sliderLine = document.querySelector('.slider-line');
const offsetX = 410;
const sliderLineChildrens = [...sliderLine.children];
let test = false;

sliderLineChildrens.slice(-3).reverse().forEach(slide => {
    sliderLine.insertAdjacentHTML("afterbegin", slide.outerHTML);
});

document.querySelector('.arrow-right').addEventListener('click', function(){
    sliderLine.scrollLeft += offsetX;
});

document.querySelector('.arrow-left').addEventListener('click', function () {
    sliderLine.scrollLeft -= offsetX;
});

//
const par = document.querySelector('.par-group-6');
const plus = document.querySelector('.btn-group-6');
const offsetY = 50;

plus.addEventListener('click', function (){
    if (!test){
        par.style.paddingBottom = offsetY + 'px';
        test = true;
    } else {
        par.style.paddingBottom = 0 + 'px';
        test = false;
    }
})


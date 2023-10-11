// slider
const sliderLine = document.querySelector('.slider-line');
const offset = 410;
const sliderLineChildrens = [...sliderLine.children];

sliderLineChildrens.slice(-3).reverse().forEach(slide => {
    sliderLine.insertAdjacentHTML("afterbegin", slide.outerHTML);
});

document.querySelector('.arrow-right').addEventListener('click', function(){
    sliderLine.scrollLeft += offset;
});

document.querySelector('.arrow-left').addEventListener('click', function () {
    sliderLine.scrollLeft -= offset;
});


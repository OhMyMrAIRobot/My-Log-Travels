// slider
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.arrow-right').addEventListener('click', function(){
    offset -= 389;
    if (offset < -389) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.arrow-left').addEventListener('click', function () {
    offset += 389;
    if (offset > 389) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});





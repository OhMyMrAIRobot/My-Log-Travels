// slider
const sliderLine = document.querySelector('.slider-line');
const offsetX = 410;
const sliderLineChildrens = [...sliderLine.children];

sliderLineChildrens.slice(-3).reverse().forEach(slide => {
    sliderLine.insertAdjacentHTML("afterbegin", slide.outerHTML);
});

document.querySelector('.arrow-right').addEventListener('click', function(){
    sliderLine.scrollLeft += offsetX;
});

document.querySelector('.arrow-left').addEventListener('click', function () {
    sliderLine.scrollLeft -= offsetX;
});


// List
const btnList = document.querySelectorAll('.btn-group-6');
const offsetY = 50;

btnList.forEach(function(btn) {
    btn.addEventListener('click', function () {
        const parent = btn.parentNode;
        if (parent.style.marginBottom !== 50 + 'px'){
            parent.style.marginBottom = `${offsetY}px`;
        } else {
            parent.style.marginBottom = `${0}px`;
        }
    });
});

// Submit button click
const btnSubmit = document.querySelector('.btn-group-8');
const inputAreas = document.querySelectorAll('.text-input');
const textArea = document.querySelector('.msg-input');
const greyColor = "#aeaeae";

btnSubmit.addEventListener('click', function (){
    btnSubmit.textContent = "Submitted";
    btnSubmit.setAttribute('disabled', true);
    btnSubmit.style.cursor = "default";
    btnSubmit.style.pointerEvents = "none";
    btnSubmit.style.backgroundColor = greyColor;
    btnSubmit.style.borderColor = greyColor;

    inputAreas.forEach(function (area){
        area.value = "";
    })
    textArea.value = "";


})


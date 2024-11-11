document.title = 'HomePage | KFC';

const body = document.body;

const sidebar = document.querySelector('.sidebar');

const links = document.querySelector('.links a');

// ketika di klik

function sidebarMenu(){

    sidebar.classList.toggle('active');

    return;
}   


function darkMode(){

    body.classList.toggle('active');

    links.style.color = 'red';
        
    return;
}


// slider
let slides = document.querySelector('.slides');

let nextButton = document.querySelector('#next');

let prevButton = document.querySelector('#prev');

nextButton.addEventListener('click', function(){
    slides.append(slides.querySelector('img:first-child'));
});

prevButton.addEventListener('click', function(){
    slides.prepend(slides.querySelector('img:last-child'));
});





const imageSlider = document.querySelector('.slider');

const btnPrev = document.querySelector('#btn-prev');

const btnNext = document.querySelector('#btn-next');

btnNext.addEventListener('click', function(){
    let img = imageSlider.querySelector('img:first-child');
    imageSlider.append(img);
});

btnPrev.addEventListener('click', function(){
    imageSlider.prepend(imageSlider.querySelector('img:last-child'));
});

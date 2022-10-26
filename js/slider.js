const track = document.querySelector ('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector ('.carousel__button--right');
const prevButton = document.querySelector ('.carousel__button--left');
const dotsNav = document.querySelector ('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;



//acomodar las imagenes al lado de la otra

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
};
slides.forEach(setSlidePosition);

//cuando click a izquierda, mover a izquierda

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.tranform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


//cuando click a derecha, mover a derecha

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
   
    moveToSlide(track, currentSlide, nextSlide);
})


//cuando click a indicador, mover a esa imagen
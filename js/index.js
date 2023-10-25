const reviewsContainer = document.querySelector('.reviews');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let slideIndex = 0;
prevButton.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
        updateSlider();
    }
});
nextButton.addEventListener('click', () => {
    if (slideIndex < 2) { // Change this number to match the total number of reviews
        slideIndex++;
        updateSlider();
    }
});
function updateSlider() {
    const slideWidth = -slideIndex * 100;
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) reviewsContainer.style.transform = `translateX(${slideWidth}%)`;
    else reviewsContainer.style.transform = `translateX(${slideWidth + 2}%)`;
}


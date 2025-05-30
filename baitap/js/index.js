const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
let isDragging = false, startX = 0, translateX = 0, currentIndex = 0;
const slideCount = 3;

sliderContainer.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.pageX;
    slider.style.transition = 'none';
});

sliderContainer.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const diffX = (e.pageX - startX) / sliderContainer.offsetWidth * 100;
    translateX = -currentIndex * (100 / slideCount) + diffX;
    translateX = Math.min(0, Math.max(-(100 - 100 / slideCount), translateX));
    slider.style.transform = `translateX(${translateX}%)`;
});

sliderContainer.addEventListener('mouseup', stopDragging);
sliderContainer.addEventListener('mouseleave', stopDragging);

function stopDragging() {
    if (!isDragging) return;
    isDragging = false;
    slider.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    currentIndex = Math.round(-translateX / (100 / slideCount));
    currentIndex = Math.max(0, Math.min(slideCount - 1, currentIndex));
    translateX = -currentIndex * (100 / slideCount);
    slider.style.transform = `translateX(${translateX}%)`;
}

sliderContainer.addEventListener('touchstart', e => {
    isDragging = true;
    startX = e.touches[0].pageX;
    slider.style.transition = 'none';
});

sliderContainer.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const diffX = (e.touches[0].pageX - startX) / sliderContainer.offsetWidth * 100;
    translateX = -currentIndex * (100 / slideCount) + diffX;
    translateX = Math.min(0, Math.max(-(100 - 100 / slideCount), translateX));
    slider.style.transform = `translateX(${translateX}%)`;
});

sliderContainer.addEventListener('touchend', stopDragging);
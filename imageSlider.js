export default function createImageSlider(parent, imageList) {
    let index = 0;
    const imgNum = imageList.length;

    const container = document.querySelector(parent);
    const imageSlider = document.createElement('div');
    imageSlider.classList.add('imageSlider');

    const leftArrowDiv = document.createElement('div');
    leftArrowDiv.classList.add('left');
    leftArrowDiv.classList.add('arrow');
    leftArrowDiv.addEventListener('click', () => {
        index -= 1;
        if (index < 0) {
            index = imgNum - 1;
        }
        showSlide(index);
    });
    const leftArrow = document.createElement('div');
    leftArrow.textContent = '<';
    leftArrowDiv.appendChild(leftArrow);
    imageSlider.appendChild(leftArrowDiv);

    const rightArrowDiv = document.createElement('div');
    rightArrowDiv.classList.add('right');
    rightArrowDiv.classList.add('arrow');
    rightArrowDiv.addEventListener('click', () => {
        index += 1;
        if (index === imgNum) {
            index = 0;
        }
        showSlide(index);
    });
    const rightArrow = document.createElement('div');
    rightArrow.textContent = '>';
    rightArrowDiv.appendChild(rightArrow);
    imageSlider.appendChild(rightArrowDiv);

    const slides = document.createElement('div');
    slides.classList.add('slides');
    slides.style.width = `${imgNum * 100}%`;
    for (const image of imageList) {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url('${image}')`;
        slides.appendChild(slide);
    }
    imageSlider.appendChild(slides);
    container.appendChild(imageSlider);
}

function showSlide(index) {
    const slides = document.querySelector('.slides');
    slides.style.left = `-${index * 100}%`;
}

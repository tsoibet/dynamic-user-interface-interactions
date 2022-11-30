export default function createImageSlider(parent, imageList) {
    let index = 0;

    const container = document.querySelector(parent);
    const imageSlider = document.createElement('div');
    imageSlider.classList.add('imageSlider');

    const leftArrowDiv = document.createElement('div');
    leftArrowDiv.classList.add('left');
    leftArrowDiv.classList.add('arrow');
    leftArrowDiv.addEventListener('click', () => {
        index -= 1;
        if (index < 0) {
            index = imageList.length - 1;
        }
        setImage(imageList, index);
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
        if (index === imageList.length) {
            index = 0;
        }
        setImage(imageList, index);
    });
    const rightArrow = document.createElement('div');
    rightArrow.textContent = '>';
    rightArrowDiv.appendChild(rightArrow);
    imageSlider.appendChild(rightArrowDiv);

    const slides = document.createElement('div');
    slides.classList.add('slides');
    const leftSlide = document.createElement('div');
    leftSlide.classList.add('left');
    leftSlide.classList.add('slide');
    slides.appendChild(leftSlide);
    const middleSlide = document.createElement('div');
    middleSlide.classList.add('middle');
    middleSlide.classList.add('slide');
    slides.appendChild(middleSlide);
    const rightSlide = document.createElement('div');
    rightSlide.classList.add('right');
    rightSlide.classList.add('slide');
    slides.appendChild(rightSlide);
    imageSlider.appendChild(slides);
    container.appendChild(imageSlider);

    setImage(imageList, index);
}

function setImage(imageList, index) {
    const leftSlide = document.querySelector('.left.slide');
    leftSlide.style.backgroundImage = `url('${imageList.at((index - 1) % imageList.length)}')`;
    const middleSlide = document.querySelector('.middle.slide');
    middleSlide.style.backgroundImage = `url('${imageList[index]}')`;
    const rightSlide = document.querySelector('.right.slide');
    rightSlide.style.backgroundImage = `url('${imageList.at((index + 1) % imageList.length)}')`;
}

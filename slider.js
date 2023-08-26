const initSLider = () => {
    const gap = 30;
    let offset = 0;
    const nextBtn = document.querySelector(".preview__btn__next");
    const prevBtn = document.querySelector(".preview__btn__prev");
    const sliderLine = document.querySelector(".preview__slider__cards");

    const nextSlide = () => {
        if (offset > 0) {
            offset = 0;
        } else {
            offset += sliderLine.offsetWidth + gap;
        }
        sliderLine.style.left = - offset + "px";
    }

    const prevSlide = () => {
        if (offset === 0) {
            offset += sliderLine.offsetWidth + gap;
            sliderLine.style.left = - offset + "px";
        } else {
            offset -= sliderLine.offsetWidth + gap;
            sliderLine.style.left = offset + "px";
        } 
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    sliderLine.style.left = "0";
}

initSLider();
window.addEventListener("resize", initSLider);
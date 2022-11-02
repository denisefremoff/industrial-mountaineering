//Главный слайдер
const sliderLine = document.querySelector('.slider_line'),
    buttonPrev = document.querySelector('.button_prev'),
    buttonNext = document.querySelector('.button_next'),
    dots = document.querySelectorAll('.dot'),
    slider = document.querySelectorAll('.slider'),
    sliderImg = document.querySelectorAll('.slider img'),
    sliderImgBackground = document.querySelectorAll('.background')
let position = 0,
    dotIndex = 0,
    width

function sliderWidth() {
    width = document.querySelector('.slider_wrapper').offsetWidth;
    sliderLine.style.width = width * dots.length + 'px';
    slider.forEach(item => {
        if (width > 1061) {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        } else {
            item.style.width = width + 'px';
            item.style.height = '300px';
        }
    })
    sliderImg.forEach(item => {
        if (width > 1061) {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        } else {
            item.style.width = width + 'px';
            item.style.height = '300px';
        }
    })
    sliderImgBackground.forEach(item => {
        if (width > 1061) {
            item.style.width = (width * 84.7 / 100) + 'px';
            item.style.height = 'auto';
        } else {
            item.style.width = (width * 84.7 / 100) + 'px';
            item.style.height = '300px';
        }
    })
}

window.addEventListener('resize', sliderWidth);
sliderWidth();

const nextSlide = () => {
    if (position < (dots.length - 1) * width) {
        position += width;
        dotIndex++;
    } else {
        position = 0;
        dotIndex = 0;
    }
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
}

const prevSlide = () => {
    if (position > 0) {
        position -= width;
        dotIndex--;
    } else {
        position = (dots.length - 1) * width;
        dotIndex = (dots.length - 1);
    }
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
}

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}

buttonNext.addEventListener('click', nextSlide)
buttonPrev.addEventListener('click', prevSlide)

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = width * index;
        sliderLine.style.left = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
    })
})

/*setInterval(() => {
    nextSlide()
}, 5000)*/


//Слайдер отзывы
const sliderReviewLine = document.querySelector('.slider_review_line'),
    reviewButtonPrev = document.querySelector('.review_button_prev'),
    reviewButtonNext = document.querySelector('.review_button_next'),
    dotReview = document.querySelectorAll('.dot_review'),
    sliderReview = document.querySelectorAll('.slider_review'),
    sliderReviewP = document.querySelectorAll('.slider_review p')
let reviewPosition = 0,
    widthReview

function reviewWidth() {
    widthReview = document.querySelector('.reviews_slider_wrapper').offsetWidth;
    sliderReviewLine.style.widthReview = widthReview * dotReview.length + 'px';
    dotReview.forEach(item => {
        item.style.width = widthReview + 'px';
    })
    sliderReview.forEach(item => {
        if (widthReview > 832) {
            item.style.width = ((widthReview / 2) - 20) + 'px';
        } else {
            item.style.width = widthReview + 'px';
        }
    })
    sliderReviewP.forEach(item => {
        if (widthReview > 832) {
            item.style.width = ((widthReview / 2) - 85) + 'px';
        } else {
            item.style.width = widthReview + 'px';
        }
    })
}

window.addEventListener('resize', reviewWidth);
reviewWidth();

const reviewNextSlide = () => {
    if (reviewPosition < (dotReview.length - 1) * widthReview) {
        reviewPosition += widthReview;
    } else {
        reviewPosition = 0;
    }
    sliderReviewLine.style.left = -reviewPosition + 'px';
}

const reviewPrevSlide = () => {
    if (reviewPosition > 0) {
        reviewPosition -= widthReview;
    } else {
        reviewPosition = (dotReview.length - 1) * widthReview;
    }
    sliderReviewLine.style.left = -reviewPosition + 'px';
}

reviewButtonNext.addEventListener('click', reviewNextSlide);
reviewButtonPrev.addEventListener('click', reviewPrevSlide);

/*setInterval(() => {
    reviewNextSlide()
}, 5000)*/

//Мобильное меню
const hamb = document.querySelector('.hamb'),
    popup = document.querySelector('.popup'),
    menuHeader = document.querySelector('.menu').cloneNode(1)

function hambOpen(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    hamb.classList.toggle('active_hamb');
    renderPopup();
}

hamb.addEventListener('click', hambOpen);

function renderPopup() {
    popup.appendChild(menuHeader);
}

const hambFooter = document.querySelector('.hamb_footer'),
    popupFooter = document.querySelector('.popup_footer'),
    menuFooter = document.querySelector('.footer_menu').cloneNode(1)

hambFooter.addEventListener('click', hambOpenFooter);

function hambOpenFooter(e) {
    e.preventDefault();
    popupFooter.classList.toggle('open_footer');
    hambFooter.classList.toggle('active_hamb_footer');
    renderPopupFooter();
}

function renderPopupFooter() {
    popupFooter.appendChild(menuFooter);
}

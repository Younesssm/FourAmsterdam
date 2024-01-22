
/** Alle acties zijn een evenement, addevent betekent luister naar DOMcontentloaded.
 *
 */
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');
    const increaseFontSize = document.getElementById('increase-font-size');
    const decreaseFontSize = document.getElementById('decrease-font-size');

    modeToggle.addEventListener('click', function () {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
    });

    increaseFontSize.addEventListener('click', function () {
        changeFontSize("increase");
    })
    decreaseFontSize.addEventListener('click', function () {
        changeFontSize('decrease');
    })

    new Swiper(".swiper-standard", {
        slidesPerView: 1.5,
        spaceBetween: 5,
        keyboard: {
            enabled: true,
        },
    });

    new Swiper(".swiper-popular", {
        slidesPerView: 1.2,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: {
            enabled: true,
        },
    });

    new Swiper(".swiper-highlights", {
        slidesPerView: 1.2,
        spaceBetween: 5,
        keyboard: {
            enabled: true,
        },
    });
});


function changeFontSize(action) {
    const elements = document.querySelectorAll('p, a, h1, h2, h3');

    const step = 2;

    elements.forEach(element => {
        const currentSize = parseInt(window.getComputedStyle(element, null).getPropertyValue('font-size'));
        if (action === 'increase') {
            element.style.fontSize = currentSize + step + 'px';
        } else if (action === 'decrease') {
            element.style.fontSize = currentSize - step + 'px';
        }
    });
}
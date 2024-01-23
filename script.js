
/** Alle acties zijn een evenement, addevent betekent luister naar DOMcontentloaded.
 const body selecteerd het <body> element van het document.
 const modeToggle: Dit selecteert een HTML-element met de ID 'modeToggle' en slaat het op in de var.*/
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');
    const increaseFontSize = document.getElementById('increase-font-size');
    const decreaseFontSize = document.getElementById('decrease-font-size');

    /* Een event listener wordt toegevoegd met modeToggle en zodra er hier op
    wordt geklikt, wordt light-mode en dark-mode getoont. */
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

    /* Hiermee maak je een nieuwe Swiper-slider en vertel je dat 
    deze moet worden toegepast op HTML-elementen met de klasse 
    "swiper-standard"
    Met keyboard: { enabled: true }, schakel je toetsenbordnavigatie in
    wat zorgt voor toegankelijkheid.  */
    new Swiper(".swiper-standard", {
        slidesPerView: 1.5,
        spaceBetween: 5,
        keyboard: {
            enabled: true,
        },
    });

    /* pagination: { el: ".swiper-pagination" },: 
    Hiermee voeg je paginatie toe aan de slider. 
    Paginatie zijn die stippen of balken onderaan de 
    slider die aangeven welke dia je bekijkt. */
    new Swiper(".swiper-popular", {
        slidesPerView: 1.2,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
        },

        /* Met nextEl: ".swiper-button-next" wordt aangegeven dat dit de knop is
        om naar de volgende te gaan. */
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

/* De functie changeFontSize accepteert een actie ('action') als input. */
function changeFontSize(action) {
    const elements = document.querySelectorAll('p, a, h1, h2, h3');

    const step = 2;

    /* Voor elk element in de lijst van geselecteerde elementen wordt het volgende toegepast.
    window.getComputedStyle(element, null): Dit krijgt de volledige stijl van het HTML-element (element).*/
    elements.forEach(element => {
        const currentSize = parseInt(window.getComputedStyle(element, null).getPropertyValue('font-size'));
        if (action === 'increase') {
            element.style.fontSize = currentSize + step + 'px';
        } else if (action === 'decrease') {
            element.style.fontSize = currentSize - step + 'px';
        }
    });
}
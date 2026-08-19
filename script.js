// ==========================
// МОБИЛЬНОЕ МЕНЮ
// ==========================

function toggleMenu() {
    const nav = document.querySelector("nav");

    nav.classList.toggle("mobile-open");
}


// ==========================
// ПЕРЕХОД К БРОНИРОВАНИЮ
// ==========================

function scrollToBooking() {
    document
        .getElementById("booking")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ==========================
// ФИЛЬТР МЕНЮ
// ==========================

function filterMenu(category, button) {

    const cards = document.querySelectorAll(".food-card");
    const buttons = document.querySelectorAll(".category");

    // Убираем active
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    // Добавляем active выбранной кнопке
    button.classList.add("active");


    cards.forEach(card => {

        const cardCategory = card.dataset.category;

        if (
            category === "all" ||
            cardCategory === category
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// ==========================
// БРОНИРОВАНИЕ
// ==========================

const bookingForm =
    document.getElementById("bookingForm");

const formMessage =
    document.getElementById("formMessage");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "✓ Заявка отправлена. Мы свяжемся с вами для подтверждения.";

    bookingForm.reset();

});


// ==========================
// HEADER ПРИ СКРОЛЛЕ
// ==========================

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(17,16,14,0.97)";

    } else {

        header.style.background =
            "rgba(17,16,14,0.90)";

    }

});


// ==========================
// АНИМАЦИЯ ПОЯВЛЕНИЯ
// ==========================

const elements = document.querySelectorAll(
    ".about, .menu, .food-card, .feature, .reviews, .review, .booking, .contacts"
);


const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
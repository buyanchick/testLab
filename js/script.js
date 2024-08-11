var element = document.getElementById("header-menu");
var trigger = document.getElementById("burger-button");
var logo = document.getElementById("header-logo-text");
var body = document.body;

trigger?.addEventListener("click", function (e) {
  e.preventDefault();
  element?.classList.toggle("active");
  trigger?.classList.toggle("active");
  logo?.classList.toggle("active");
  body?.classList.toggle("lock");
});

new Accordion(".accordion-container");

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  garbCursor: true,
  spaceBetween: 32,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dinamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

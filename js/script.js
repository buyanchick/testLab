let element = document.getElementById("header-menu");
let trigger = document.getElementById("burger-button");
let logo = document.getElementById("header-logo-text");
let menuLinks = document.querySelectorAll(".header-menu-link");
let body = document.body;

trigger?.addEventListener("click", function (e) {
  e.preventDefault();
  element?.classList.toggle("active");
  trigger?.classList.toggle("active");
  logo?.classList.toggle("active");
  body?.classList.toggle("lock");
});

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    element?.classList.remove("active");
    trigger?.classList.remove("active");
    logo?.classList.remove("active");
    body?.classList.remove("lock");
  })
);

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

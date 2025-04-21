document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiperwtd', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next-wtd',
      prevEl: '.swiper-button-prev-wtd',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiperjtc", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-jtc",
      prevEl: ".swiper-button-prev-jtc",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

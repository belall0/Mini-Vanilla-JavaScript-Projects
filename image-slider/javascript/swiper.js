const imgSwiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 800,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

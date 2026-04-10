

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  freeMode: true,
  // loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
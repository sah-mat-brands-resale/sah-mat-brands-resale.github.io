var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 0, 
  loop: true, 
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev',
  },
});
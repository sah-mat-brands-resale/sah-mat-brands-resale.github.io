var swiper;
function initSwiper(spaceBetweenValue) {
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: spaceBetweenValue,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
if (window.innerWidth <= 768) {
  initSwiper(0);
} else {
  initSwiper(0);
}
window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) {
    swiper.destroy(); 
    initSwiper(0);
  } else {
    swiper.destroy(); 
    initSwiper(0); 
  }
});



  
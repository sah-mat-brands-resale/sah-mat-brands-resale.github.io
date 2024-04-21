var swiper;
function initSwiper() {
  if (window.innerWidth > 768) {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    });
  }
}
initSwiper();
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    if (swiper !== undefined) {
      swiper.destroy();
    }
    initSwiper();
  }
});
function initSwiperForMobile() {
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
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
function initSwiperBasedOnScreenSize() {
  if (window.innerWidth <= 768) {
    if (swiper !== undefined) {
      swiper.destroy();
    }
    initSwiperForMobile();
  } else {
    if (swiper !== undefined) {
      swiper.destroy();
    }
    initSwiper(0); 
  }
}
initSwiperBasedOnScreenSize();
window.addEventListener("resize", function () {
  initSwiperBasedOnScreenSize();
});
window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) {
    swiper.destroy(); 
    initSwiper(0);
  } else {
    swiper.destroy(); 
    initSwiper(0); 
  }
});

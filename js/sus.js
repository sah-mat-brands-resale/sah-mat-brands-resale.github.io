let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

function topFunction() {
const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

function scrollToTop(timestamp) {
  const duration = 500; 
  const start = timestamp || performance.now();
  const progress = Math.min((performance.now() - start) / duration, 1); 
  const easeInOutQuad = t => t<.5 ? 2*t*t : -1+(4-2*t)*t;

  const newScroll = currentScroll * (1 - easeInOutQuad(progress));

  document.documentElement.scrollTop = newScroll;
  document.body.scrollTop = newScroll;

  if (progress < 1) {
    window.requestAnimationFrame(scrollToTop.bind(null, start));
  }
}

window.requestAnimationFrame(scrollToTop);
}

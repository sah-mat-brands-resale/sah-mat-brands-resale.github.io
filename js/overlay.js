function openOverlay(imageSrc) {
    var overlay = document.getElementById('overlay');
    var overlayImg = document.getElementById('overlay-img');
    overlayImg.src = imageSrc;
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
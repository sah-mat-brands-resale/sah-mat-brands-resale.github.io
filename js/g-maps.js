window.addEventListener('resize', resizeMap);

function resizeMap() {
    var map = document.getElementById('google-map');
    var container = document.querySelector('.map-container');
    
    var containerWidth = container.offsetWidth;
    var aspectRatio = 9 / 16;
    
    map.style.height = containerWidth * aspectRatio + 'px';
}

window.addEventListener('load', resizeMap);
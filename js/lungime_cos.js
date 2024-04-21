actualizeazaNumarProduseCos();
function actualizeazaNumarProduseCos() {
    const cos = localStorage.getItem('cos') ? JSON.parse(localStorage.getItem('cos')) : [];
    const numarProduseCos = document.getElementById('numar-produse-cos');
    numarProduseCos.textContent = cos.length;
  }
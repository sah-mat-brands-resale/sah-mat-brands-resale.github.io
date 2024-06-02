document.addEventListener('DOMContentLoaded', function() {
  const butoaneAdaugaInCos = document.querySelectorAll('.adauga-in-cos');
  butoaneAdaugaInCos.forEach(function(buton) {
    buton.addEventListener('click', function() {
      const idProdus = this.getAttribute('data-id');
      const numeProdus = this.getAttribute('data-nume');
      const pretProdus = this.getAttribute('data-pret');
      const imagineProdus = this.getAttribute('data-imagine');
      adaugaInCos(idProdus, numeProdus, pretProdus, imagineProdus);
      afiseazaAlert();
      actualizeazaNumarProduseCos();
    });
  });
    actualizeazaNumarProduseCos();
  function adaugaInCos(idProdus, numeProdus, pretProdus, imagineProdus) {
    const produs = {
      id: idProdus,
      nume: numeProdus,
      pret: pretProdus,
      imagine: imagineProdus
    };
    const cos = localStorage.getItem('cos') ? JSON.parse(localStorage.getItem('cos')) : [];
    cos.push(produs);
    localStorage.setItem('cos', JSON.stringify(cos));
  }
  function actualizeazaNumarProduseCos() {
    const cos = localStorage.getItem('cos') ? JSON.parse(localStorage.getItem('cos')) : [];
    const numarProduseCos = document.getElementById('numar-produse-cos');
    numarProduseCos.textContent = cos.length;
  }
  function afiseazaAlert() {
    const alert = document.getElementById('myAlert');
    alert.style.display = 'block';
  }
  function continuaCumparaturile() {
    inchideAlert();
  }
  function veziCosul() {
    window.location.href = "../paginie/cose.html";
  }
  function inchideAlert() {
    const alert = document.getElementById('myAlert');
    alert.style.display = 'none';
  }
  const continuaBtn = document.getElementById('continuaBtn');
  continuaBtn.addEventListener('click', function() {
    continuaCumparaturile();
  });
  const veziCosulBtn = document.getElementById('veziCosulBtn');
  veziCosulBtn.addEventListener('click', function() {
    veziCosul();
  });
  window.addEventListener('click', function(event) {
    const alert = document.getElementById('myAlert');
    if (event.target == alert) {
      inchideAlert();
    }
  });
});

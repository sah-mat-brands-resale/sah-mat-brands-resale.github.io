document.addEventListener('DOMContentLoaded', function() {
    const comandaButton = document.getElementById('comanda-button');
    const overlay = document.getElementById('overlay');
    const formularComanda = document.getElementById('formular-comanda');
    const livrareSelect = document.getElementById('curier');
    const adresaLivrareDiv = document.getElementById('campuri-livrare');
    
    comandaButton.addEventListener('click', function() {
      overlay.classList.remove('ascuns');
    });
  
    formularComanda.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var nume = document.getElementById('nume').value;
    var prenume = document.getElementById('prenume').value;
    var telefon = document.getElementById('telefon').value;
    var livrare = document.querySelector('input[name="livrare"]:checked');
    
  
    if (livrare.value === 'livrare') {
      var oras = document.getElementById('oras').value;
      var adresa = document.getElementById('adresa').value;
    } else if (livrare.value === 'ridicare') {
      localStorage.removeItem('cos');
      alert('Your order has been placed for in-store pickup!');
      window.location.href = "../indexe.html";
      return;
    }
  
    var plata = document.querySelector('input[name="plata"]:checked');
  
    localStorage.removeItem('cos');
    alert('Your order has been placed for delivery!');
    window.location.href = "../indexe.html";
  });
  
    livrareSelect.addEventListener('change', function() {
      if (livrareSelect.value === 'ridicare') {
        adresaLivrareDiv.style.display = 'none';
      } else {
        adresaLivrareDiv.style.display = 'block';
      }
    });
  });
  
  function afiseazaCampuriLivrare() {
    document.getElementById('campuri-livrare').style.display = 'block';
    document.getElementById('adresa-magazin').style.display = 'none';
    
    var campuriLivrare = document.getElementById('campuri-livrare').querySelectorAll('input, select');
    campuriLivrare.forEach(function(camp) {
      camp.setAttribute('required', 'required');
    });
  }
  
  function ascundeCampuriLivrare() {
    document.getElementById('campuri-livrare').style.display = 'none';
    document.getElementById('adresa-magazin').style.display = 'block'; 
    
    var campuriLivrare = document.getElementById('campuri-livrare').querySelectorAll('input, select');
    campuriLivrare.forEach(function(camp) {
      camp.removeAttribute('required');
    });
  }
  
  
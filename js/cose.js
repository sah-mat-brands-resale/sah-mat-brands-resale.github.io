document.addEventListener('DOMContentLoaded', function() {
  const cos = localStorage.getItem('cos') ? JSON.parse(localStorage.getItem('cos')) : [];
  const cosList = document.getElementById('cos-cumparaturi');
  const numarProduse = document.getElementById('numar-produse');
  const cosGol = document.getElementById('cos-gol');
  const continuaCumparaturile = document.getElementById('continua-cumparaturile');
  const informatiiCos = document.getElementById('informatii-cos');
  afiseazaCos();
  actualizeazaNumarProduseCos(); 
  
  function afiseazaCos() {
      if (cos.length === 0) {
          informatiiCos.classList.add('ascuns');
      } else {
          informatiiCos.classList.remove('ascuns'); 
          calculeazaSumaCosului(cos); 
          if (cos.length === 1) {
              informatiiCos.classList.add('un-produs');
          } else if (cos.length === 2 || cos.length === 3) {
              informatiiCos.classList.add('doi-trei-produse');
          }
      }
  }

  function calculeazaSumaCosului(cos) {
      let sumaTotala = 0;
      cos.forEach(function(produs) {
          sumaTotala += parseFloat(produs.pret); 
      });

      const taxaLivrare = 50;
      const subtotal = sumaTotala;
      const total = sumaTotala + taxaLivrare;

      const subtotalElement = document.getElementById('subtotal');
      subtotalElement.textContent = `${subtotal.toFixed(2)} MDL`; 

      const totalElement = document.getElementById('total');
      totalElement.textContent = `${total.toFixed(2)} MDL`; 
  }

  if (cos.length === 0) {
      cosGol.style.display = 'block';
      continuaCumparaturile.style.display = 'block';
      document.getElementById('cos-cumparaturi-h2').style.display = 'none';
  }

  numarProduse.textContent = `(${cos.length} items)`;

  cos.forEach(function(produs) {
      const listItem = document.createElement('li');
      listItem.classList.add('produs');
      listItem.setAttribute('data-id', produs.id); 

      const imagine = document.createElement('img');
      imagine.src = produs.imagine;
      imagine.alt = produs.nume;
      imagine.classList.add('imagine-produs');
      listItem.appendChild(imagine);

      const detaliiProdus = document.createElement('div');
      detaliiProdus.classList.add('detalii-produs');

      const nume = document.createElement('h3');
      nume.textContent = produs.nume;
      nume.classList.add('nume-produs');
      detaliiProdus.appendChild(nume);

      const marimiDiv = document.createElement('div');
      marimiDiv.classList.add('marimi-produs');

      if (produs.id >= 1 && produs.id <= 24) {
          const marimi = ['xs', 's', 'm', 'l', 'xl'];
          marimi.forEach(function(marime, index) {
              const marimeButton = document.createElement('button');
              marimeButton.textContent = marime.toUpperCase();
              marimeButton.setAttribute('data-index', index); 
              marimeButton.addEventListener('click', function() {
                  const buttons = this.parentNode.querySelectorAll('button');
                  buttons.forEach(btn => {
                      btn.classList.remove('selectat');
                  });
                  this.classList.add('selectat');
                  saveSelectedSize(produs.id, index);
              });
              marimiDiv.appendChild(marimeButton);
          });
          listItem.classList.add('eliminare-marimi1');
      } else if (produs.id >= 25 && produs.id <= 50) {
          const marimiPapuci = ['37', '38', '39', '40', '41'];
          marimiPapuci.forEach(function(marime, index) {
              const marimeButton = document.createElement('button');
              marimeButton.textContent = marime;
              marimeButton.setAttribute('data-index', index); 
              marimeButton.addEventListener('click', function() {
                  const buttons = this.parentNode.querySelectorAll('button');
                  buttons.forEach(btn => {
                      btn.classList.remove('selectat');
                  });
                  this.classList.add('selectat');
                  saveSelectedSize(produs.id, index);
              });
              marimiDiv.appendChild(marimeButton);
          });
          listItem.classList.add('eliminare-marimi2');
      } else {
          listItem.classList.add('eliminare-fara-marimi');
      }
      detaliiProdus.appendChild(marimiDiv);

      const pret = document.createElement('p');
      pret.textContent = produs.pret + ' MDL';
      pret.classList.add('pret-produs');
      detaliiProdus.appendChild(pret);

      listItem.appendChild(detaliiProdus);

      const eliminareButton = document.createElement('button');
      eliminareButton.innerHTML = '<i class="fas fa-times"></i>'; 
      eliminareButton.classList.add('eliminare-produs');
      eliminareButton.addEventListener('click', function() {
          eliminaProdus(produs.id);
      });
      listItem.appendChild(eliminareButton);

      cosList.appendChild(listItem);

      restoreSelectedSize(produs.id);
  });
});

function eliminaProdus(idProdus) {
  const cos = localStorage.getItem('cos') ? JSON.parse(localStorage.getItem('cos')) : [];
  const index = cos.findIndex(function(produs) {
      return produs.id === idProdus;
  });
  if (index !== -1) {
      cos.splice(index, 1);
      localStorage.setItem('cos', JSON.stringify(cos));
      location.reload(); 
  }
}

function actualizeazaNumarProduseCos() {
  const cos = localStorage.getItem('cos') ? JSON.parse(localStorage.getItem('cos')) : [];
  const numarProduseCos = document.getElementById('numar-produse-cos');
  numarProduseCos.textContent = cos.length;
}

function saveSelectedSize(produsId, index) {
  const cos = localStorage.getItem('cos') ? JSON.parse(localStorage.getItem('cos')) : [];
  const produs = cos.find(function(produs) {
      return produs.id === produsId;
  });
  if (produs) {
      produs.marimeSelectata = index;
      localStorage.setItem('cos', JSON.stringify(cos));
  }
}

function restoreSelectedSize(produsId) {
  const cos = localStorage.getItem('cos') ? JSON.parse(localStorage.getItem('cos')) : [];
  const produs = cos.find(function(produs) {
      return produs.id === produsId;
  });
  if (produs && produs.marimeSelectata !== undefined) {
      const indexSelectat = produs.marimeSelectata;
      const button = document.querySelector(`.produs[data-id="${produsId}"] button[data-index="${indexSelectat}"]`);
      if (button) {
          button.classList.add('selectat');
      }
  }
}
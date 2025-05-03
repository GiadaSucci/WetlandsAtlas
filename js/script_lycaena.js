

  // evento hover sulle oasi
  const activeOasi = 'lycaena'; // Cambia con il nome della oasi attiva, ad esempio 'lycaena'

  document.querySelectorAll('.city-link').forEach(link => {
    const oasiName = link.getAttribute('data-oasi');
    const img = link.querySelector('img');
  
    // Mouseover: cambia immagine se non è la oasi attiva
    link.addEventListener('mouseover', function () {
      if (oasiName !== activeOasi && img) {
        img.src = `img/${oasiName}color.png`;
      }
    });
  
    // Mouseout: ripristina immagine originale se non è la oasi attiva
    link.addEventListener('mouseout', function () {
      if (oasiName !== activeOasi && img) {
        img.src = `img/${oasiName}bw.png`;
      }
   

    });
  
    // Uscita mouse – ripristina immagine originale
    link.addEventListener('mouseout', function () {
      if (link.classList.contains('active')) return;
  
      if (img) {
        img.src = originalSrc;
      }
   
  });

  // Aggiungi l'evento mouseout per ripristinare l'immagine originale
  link.addEventListener('mouseout', function() {
    const img = link.querySelector('img'); // Trova l'immagine all'interno del link
    const oasiName = link.getAttribute('data-oasi'); // Ottieni il nome dell'oasi tramite data-oasi

    if (img) {
      // Ripristina l'immagine originale
      if (oasiName === 'lycaena') {
        img.src = 'img/salzanocolor.png'; // Ripristina l'immagine originale di Oasi Lycaena
      } else if (oasiName === 'gaggio') {
        img.src = 'img/gaggiobw.png'; // Ripristina l'immagine originale di Cave di Gaggio Nord
      } else if (oasiName === 'onara') {
        img.src = 'img/onarabw.png'; // Ripristina l'immagine originale di Palude di Onara
      }
    }
  });
});


// Seleziona l'elemento della galleria
const gallery = document.getElementById('photo-gallery');

let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
  isDown = true;
  gallery.classList.add('active');
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
  isDown = false;
});

gallery.addEventListener('mouseup', () => {
  isDown = false;
});

gallery.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed multiplier
  gallery.scrollLeft = scrollLeft - walk;
});

//scroll scopri il percorso , video oasi
document.getElementById('scrollButton').addEventListener('click', function () {
  const target = document.getElementById('target-section');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

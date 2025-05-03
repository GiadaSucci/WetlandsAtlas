
// Evento hover sulle oasi
document.querySelectorAll('.city-link').forEach(link => {
  const img = link.querySelector('img');
  const oasiName = link.getAttribute('data-oasi');
  const originalSrc = img ? img.src : '';

  // Hover
  link.addEventListener('mouseover', function () {
    if (link.classList.contains('active')) return;

    if (img) {
      if (oasiName === 'lycaena') {
        img.src = 'img/salzanocolor.png'; // Cambia con l'immagine colorata
      } else if (oasiName === 'gaggio') {
        img.src = 'img/gaggiocolor.png'; // Cambia con l'immagine colorata
      } else if (oasiName === 'onara') {
        img.src = 'img/onaracolor.png'; // Cambia con l'immagine colorata
      }
    }
  });

  // Uscita mouse – ripristina immagine originale
  link.addEventListener('mouseout', function () {
    if (link.classList.contains('active')) return;

    if (img) {
      if (oasiName === 'lycaena') {
        img.src = 'img/salzanobw.png'; // Ripristina l'immagine originale di Oasi Lycaena
      } else if (oasiName === 'gaggio') {
        img.src = 'img/gaggiobw.png'; // Ripristina l'immagine originale di Cave di Gaggio Nord
      } else if (oasiName === 'onara') {
        img.src = 'img/onarabw.png'; // Ripristina l'immagine originale di Palude di Onara
      }
    }
  });
});

// Funzionalità per il drag della galleria
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

// Scroll per il bottone "Scopri il percorso"
document.getElementById('scrollButton').addEventListener('click', function () {
  const target = document.getElementById('target-section');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

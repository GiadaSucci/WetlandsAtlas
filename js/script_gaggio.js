document.querySelectorAll('.city-link').forEach(link => {
  const img = link.querySelector('img');
  const oasiName = link.getAttribute('data-oasi');

  // Salva il percorso originale dell'immagine
  const originalSrc = img ? img.src : '';

  // Mouseover
  link.addEventListener('mouseover', function () {
    if (link.classList.contains('active')) return;

    if (img) {
      if (oasiName === 'lycaena') {
        img.src = 'img/salzanocolor.png';
      } else if (oasiName === 'noale') {
        img.src = 'img/noalecolor.png';
      } else if (oasiName === 'onara') {
        img.src = 'img/onaracolor.png';
      } else if (oasiName === 'gaggio') {
        img.src = 'img/gaggiocolor.png';
      }
    }
  }); 

  // Mouseout
  link.addEventListener('mouseout', function () {
    if (link.classList.contains('active')) return;

    if (img) {
      if (oasiName === 'lycaena') {
        img.src = 'img/salzanobw.png';
      } else if (oasiName === 'noale') {
        img.src = 'img/noalebw.png';
      } else if (oasiName === 'onara') {
        img.src = 'img/onarabw.png';
      } else if (oasiName === 'gaggio') {
        img.src = 'img/gaggiobw.png';
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

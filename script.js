document.getElementById('copyZelle')?.addEventListener('click', () => {
  const email = 'your-zelle-email@example.com';
  navigator.clipboard.writeText(email).then(() => {
    alert('Zelle email copied!');
  }).catch(() => {
    alert('Could not copy. Please copy it manually.');
  });
});

// EXTENSION
// document.getElementById('copyZelle')?.addEventListener('click', () => {
//   const email = 'your-zelle-email@example.com';
//   navigator.clipboard.writeText(email).then(() => {
//     alert('Zelle email copied!');
//   }).catch(() => {
//     alert('Could not copy. Please copy it manually.');
//   });
// });

// T-shirt carousel
const shirts = [
  { src: 'assets/HERO.JPG', caption: 'Design 1 – HERO1' },
  { src: 'assets/jesus_wins.JPG', caption: 'Design 2 – JESUS' },
  { src: 'assets/PNW.JPG', caption: 'Design 3 – PNW' },
  { src: 'assets/SHEPHERED.JPG', caption: 'Design 4 – HeRO' },
  { src: 'assets/ARISE.JPG', caption: 'Design 5 – Joyland Logo' }
];

let currentShirt = 0;

function updateShirt() {
  const img = document.getElementById('shirtImage');
  const cap = document.getElementById('shirtCaption');
  const emailLink = document.getElementById('orderEmail');

  const s = shirts[currentShirt];
  img.src = s.src;
  img.alt = s.caption;
  cap.textContent = s.caption;

  const designLabel = encodeURIComponent(s.caption);
  const base = 'mailto:your-email@example.com';
  const subject = '?subject=Project%20ARARAT%20T-Shirt%20Order';
  const body = '&body=I%20would%20like%20' + designLabel +
               '.%20My%20size%20is%3A%20';
  emailLink.href = base + subject + body;
}

document.getElementById('prevShirt')?.addEventListener('click', () => {
  currentShirt = (currentShirt - 1 + shirts.length) % shirts.length;
  updateShirt();
});

document.getElementById('nextShirt')?.addEventListener('click', () => {
  currentShirt = (currentShirt + 1) % shirts.length;
  updateShirt();
});

updateShirt();
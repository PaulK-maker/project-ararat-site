document.getElementById('copyZelle')?.addEventListener('click', () => {
  const email = 'your-zelle-email@example.com';
  navigator.clipboard.writeText(email).then(() => {
    alert('Zelle email copied!');
  }).catch(() => {
    alert('Could not copy. Please copy it manually.');
  });
});

// EXTENSION
document.getElementById('copyZelle')?.addEventListener('click', () => {
  const email = 'your-zelle-email@example.com';
  navigator.clipboard.writeText(email).then(() => {
    alert('Zelle email copied!');
  }).catch(() => {
    alert('Could not copy. Please copy it manually.');
  });
});

// T-shirt carousel
const shirts = [
  { src: 'assets/shirt1.jpg', caption: 'Design 1 – Lion & Mountain' },
  { src: 'assets/shirt2.jpg', caption: 'Design 2 – Project ARARAT Badge' },
  { src: 'assets/shirt3.jpg', caption: 'Design 3 – Verse & Cross' },
  { src: 'assets/shirt4.jpg', caption: 'Design 4 – Kenyan & American Flag' },
  { src: 'assets/shirt5.jpg', caption: 'Design 5 – Joyland Logo' }
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
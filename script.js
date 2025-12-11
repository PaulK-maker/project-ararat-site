document.getElementById('copyZelle')?.addEventListener('click', () => {
  const email = 'your-zelle-email@example.com';
  navigator.clipboard.writeText(email).then(() => {
    alert('Zelle email copied!');
  }).catch(() => {
    alert('Could not copy. Please copy it manually.');
  });
});
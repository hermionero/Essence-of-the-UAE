
document.querySelectorAll('.carousel img').forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.2)';
  });
  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
  });
});

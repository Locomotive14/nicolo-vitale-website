// Transizione leggera all'ingresso
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(20px)';
  });

  // Transizione morbida all'apertura del sito
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 1; // Rende visibile il corpo con transizione
});

  const fadeIn = () => {
    document.querySelectorAll('section').forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        sec.style.transition = 'all 0.8s ease';
        sec.style.opacity = 1;
        sec.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', fadeIn);
  fadeIn();
});
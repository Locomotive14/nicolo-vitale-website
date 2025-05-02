// Transizione leggera all'ingresso
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(20px)';
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
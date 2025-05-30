document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section);
  });
});
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.body.style.setProperty('--bg-blur-move', `${scrollY * 0.04}px`);
});

export function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Navigation background on scroll
  const handleScroll = () => {
    const nav = document.querySelector('nav');
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add('bg-white');
        nav.classList.remove('bg-white/95');
      } else {
        nav.classList.add('bg-white/95');
        nav.classList.remove('bg-white');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

export function scrollToSection(sectionId: string) {
  const target = document.querySelector(sectionId);
  if (target) {
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 4; // -4 for a little extra space
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
}

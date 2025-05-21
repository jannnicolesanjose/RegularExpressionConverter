window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('solid');
    } else {
      navbar.classList.remove('solid');
    }
  });
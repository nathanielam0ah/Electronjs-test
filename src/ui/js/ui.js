window.addEventListener('load', () => {
  let prevScrollPos = window.pageYOffset;
  const navbar = document.querySelector('.navbar');
  const menu_btn = document.querySelector('.hamburger');
  const menu_mobile = document.querySelector('.mobile-nav');

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    navbar.style.left = prevScrollPos > currentScrollPos ? '10px' : '-300px';
    prevScrollPos = currentScrollPos;
  });

  menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('is-active');
    menu_mobile.classList.toggle('is-active');
  });
});

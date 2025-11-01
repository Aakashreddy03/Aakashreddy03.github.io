// Mobile nav toggle
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav nav');
if (burger) {
  burger.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    burger.setAttribute('aria-expanded', String(!open));
  });
}

// Back-to-top logic
const back = document.getElementById('backToTop');
const onScroll = () => {
  if (window.scrollY > 300) back.classList.add('show');
  else back.classList.remove('show');
};
window.addEventListener('scroll', onScroll);
back.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
onScroll();

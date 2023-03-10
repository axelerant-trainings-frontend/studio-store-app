// alert('hello');
const hamburger: HTMLElement | null = document.querySelector(
  '.header-nav-section__hamburger',
);
const navbar: HTMLElement | null = document.querySelector('.navbar');
const closeBtn: HTMLElement | null = document.querySelector('.close-btn');

hamburger?.addEventListener('click', function (): void {
  hamburger.classList.toggle('open');
  navbar?.classList.toggle('active-nav');
});

closeBtn?.addEventListener('click', function (): void {
  navbar?.classList.toggle('active-nav');
  hamburger?.classList.toggle('open');
});

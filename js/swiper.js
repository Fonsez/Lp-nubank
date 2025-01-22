var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 40, // Corrigido também o typo em "spaceBetween"
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.button-next', // Corrigido "nexEL" para "nextEl"
    prevEl: '.button-prev', // Corrigido "prevEL" para "prevEl"
  },
});
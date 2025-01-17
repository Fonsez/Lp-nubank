function scrollHeader(){
  const nav = document.getElementById('header');

  // se o scroll for mais de 50 adiciona a classe se n remove
  if(this.scrollY >= 50) nav.classList.add('active-header');
  else nav.classList.remove('active-header');

}
window.addEventListener('scroll', scrollHeader);

// secoll header
function scrollHeader(){
  const nav = document.getElementById('header');

  // se o scroll for mais de 50 adiciona a classe se n remove
  if(this.scrollY >= 50) nav.classList.add('active-header');
  else nav.classList.remove('active-header');

}
window.addEventListener('scroll', scrollHeader);
// fim scroll header



// dropdown menu
const dropdownMenu1 = document.getElementById('dropdown-item-1');
const dropdownMenu2 = document.getElementById('dropdown-item-2');
const dropdownMenu3 = document.getElementById('dropdown-item-3');

// menu item
const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

// previne a função de click natural do link q leve á algum lugar
function ShowDropdown1(event){
  event.preventDefault();
  dropdownMenu1.classList.toggle('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}


function ShowDropdown2(event){
  event.preventDefault();
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.toggle('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}


function ShowDropdown3(event){
  event.preventDefault();
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.toggle('active-dropdown-menu');
}


// escuta a função e mostra o elemento clicado
menuItem1.addEventListener('click', ShowDropdown1);
menuItem2.addEventListener('click', ShowDropdown2);
menuItem3.addEventListener('click', ShowDropdown3);

// função para o mouseleave
function RemoveDropdown(){
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}

dropdownMenu1.addEventListener('mouseleave', RemoveDropdown);
dropdownMenu2.addEventListener('mouseleave', RemoveDropdown);
dropdownMenu3.addEventListener('mouseleave', RemoveDropdown);
const burgerBtn = document.querySelector('.header__burger-btn');
const mobMenu = document.querySelector('.header__menu-mob');
burgerBtn.addEventListener('click', toggleMobMenu)
function toggleMobMenu() {
  if (mobMenu.classList.contains('closed')) {
    mobMenu.classList.remove('closed')
    mobMenu.style.transform = 'translateX(0%)';
  } else {
    mobMenu.classList.add('closed')
    mobMenu.style.transform = 'translateX(100%)';
  }
}

export { toggleMobMenu }
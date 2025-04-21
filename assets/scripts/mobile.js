const mobileMenuBtnElement = document.getElementById('menu-checkbox');
const mobileMenuElement = document.getElementById('mobile-menu');

function toggleMobileMenu () {
  mobileMenuElement.classList.toggle('show')
}

mobileMenuBtnElement.addEventListener('change', toggleMobileMenu)

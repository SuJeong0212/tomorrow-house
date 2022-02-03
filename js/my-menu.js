let myMenu = document.querySelector('.my-menu')
let myMenuButton = document.querySelector('.my-menu-button')

function toggleMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMymenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

function closeMymenuOnClickingOutside(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMymenuOnClickingOutside)
  }
}

myMenuButton.addEventListener('click', toggleMenu)

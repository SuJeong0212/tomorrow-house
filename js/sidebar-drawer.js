let drawerMenuButtonList = document.querySelectorAll('.sidebar-nav .drawer-menu-button')

function toggleDrawerMenu(){
    const drawMenu = this.parentNode
    drawMenu.classList.toggle('is-open')
}

drawerMenuButtonList.forEach(function(button){
    button.addEventListener('click',toggleDrawerMenu)
})
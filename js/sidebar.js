let sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu')
let sidebar = document.querySelector('.sidebar')
let sidebarOverlay = document.querySelector('.overlay')

function openSidebar () {
    sidebar.classList.add('is-active')
    sidebarOverlay.classList.add('is-active')
}

sidebarMenuButton.addEventListener('click', openSidebar)

function closeSidebar(){
    sidebar.classList.remove('is-active')
    sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)
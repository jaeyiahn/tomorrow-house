const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

function openSideBar() {
  sidebar.classList.add('is-active')
  overlay.classList.add('is-active')
}

function closeSideBar() {
  sidebar.classList.remove('is-active')
  overlay.classList.remove('is-active')
}

sidebarMenuButton.addEventListener('click', openSideBar)
overlay.addEventListener('click', closeSideBar)

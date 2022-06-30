const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
})

let currentActiveTab = productTab.querySelector('.is-active')

function toggleActiveTab() {
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}

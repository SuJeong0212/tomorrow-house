let orderCta = document.querySelector('.order-cta')

let [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

let orderModal = document.querySelector('.order-form-modal')
let orderModalOverlay = document.querySelector('.overlay')

orderCtaBuyButton.addEventListener('click', function () {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
})

orderModalOverlay.addEventListener('click', function () {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
})

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count

  if (this.classList.contains('is-active')) {
    //NOTE : 활성화가 되있는 상태이니 비활성화!
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    //NOTE : 비활성화가 되있는 상태이니 활성화!
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label',`북마크 ${newCount.toLocaleString()}회`)
  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)

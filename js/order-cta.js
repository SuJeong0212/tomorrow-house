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

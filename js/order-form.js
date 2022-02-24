const orderformCard = document.querySelector('.checkout-item')
const deleteButton = orderformCard.querySelectorAll('.checkout-header')

function deleteOrderform(e) {
  e.stopPropagation()
  const deleteToitem = this.parentNode
  orderformCard.removeChild(deleteToitem)
}

deleteButton.forEach((button) => {
  button.addEventListener('click', deleteOrderform)
})

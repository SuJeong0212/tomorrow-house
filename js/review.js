const reviewLikeButton = document.querySelector('.review-card-footer button')

const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'
const checkIcon = '<i class="ic-check" aria-hidden></i>'

function toggleReviewLikeButton() {
  const isLiked = this.classList.contains('btn-primary')

  if (isLiked) {
    //비활성화
    this.innerHTML = NOT_HELPFUL
  } else {
    //활성화
    this.innerHTML = checkIcon + HELPFUL
  }

  this.classList.toggle('btn-primary')
  this.classList.toggle('btn-outlined')
}
reviewLikeButton.addEventListener('click', toggleReviewLikeButton)

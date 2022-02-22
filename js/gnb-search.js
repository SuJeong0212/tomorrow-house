let gnbSearch = document.querySelector('.gnb-search')
let gnbSearchInput = gnbSearch.querySelector('input')
let gnbSearchHistory = gnbSearch.querySelector('.search-history')

function closeGnbSearchHistory(e){
  if(!gnbSearch.contains(e.target)){
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click',closeGnbSearchHistory)
  }
}

function openGnbSearchHistory() {
  if(!gnbSearchHistory.classList.contains('is-active')){
    window.addEventListener('click', closeGnbSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

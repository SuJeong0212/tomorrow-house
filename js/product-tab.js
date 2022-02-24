const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

let currentActiveTab = productTab.querySelector('.is-active')
let disableUpdating = false

function toggleActiveTab() {
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    disableUpdating = true
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem

    //함수가 실행 되고 1초 뒤에 disableUpdating = false 로 다시 바뀌게 함
    setTimeout(() => {
      disableUpdating = false
    }, 1000)
  }
}

function scrollToTabPannel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPannel)
})

const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]
const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})
const productTabPanelPositionMap = {}

function detectTabPanelPosition() {
  //각각의 tabPanel의 y축 위치를 찾는다
  //productTabPanelPositionMap에 그 값을 업데이트

  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position
  })

  updateActiveTabOnScroll() //새로고침 할 시에 그 위치에있는 곳에 is-active되기
}

function updateActiveTabOnScroll() {
  //disableUpdating가 true면 이 함수를 실행하지 않게 하기
  //스크롤 말고 탭메뉴 클릭하면서 페이지 이동 시 그 전에 탭메뉴의 is-active 가 사라지게 하는 것
  if (disableUpdating) {
    return
  }

  //스크롤 위치에 따라서 activeTab 업데이트
  //1.현재 유저가 얼마만큼 스크롤을 했는지 -> scrollY
  //2.각 tabPanel y축 위치 -> productTabPanelPositionMap

  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8)

  let newActiveTab
  if (scrolledAmount >= productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabButtonList[4] //추천버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabButtonList[3] //배송환불버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabButtonList[2] //문의버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabButtonList[1] //리뷰버튼
  } else {
    newActiveTab = productTabButtonList[0] //상품정보버튼
  }

  //추가 : 페이지의 스크롤을 끝까지 했을 경우 newActiveTab = productTabButtonList[4]
  //window.scrollY + window.innerHeight === body의 전체 height
  const bodyHeight =
    document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0) //Tablet에서 Footer부분에다가 margin-bottom:56px가 있기 때문
  if (window.scrollY + window.innerHeight === bodyHeight) {
    newActiveTab = productTabButtonList[4]
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active')
      if (currentActiveTab !== null) {
        currentActiveTab.classList.remove('is-active')
      }
      currentActiveTab = newActiveTab
    }
  }
}

window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', _.throttle(detectTabPanelPosition, 1000)) // _.throttle로 계속 실행되는 함수 퍼포먼스 개선하기
window.addEventListener('scroll', _.throttle(updateActiveTabOnScroll, 300)) // _. 은 lodash.js 라이브러리로 사용함

//네비
let mainNav = document.querySelectorAll('.mainmenu');
let subNav = document.querySelectorAll('.submenu');
let mainNavWrapper = document.querySelector('.main-nav-wrapper');
let navWrap = document.querySelector('.nav-wrap');
let body = document.body;

//스크롤 이벤트
window.addEventListener('scroll',function(){
  if(this.window.scrollY > 100){
    navWrap.classList.add('scrolled');
  }else{
    navWrap.classList.remove('scrolled');
  }
})

// 화면 크기 체크 함수 
function isMobile() {
  return window.innerWidth <= 728;
}

// 메인 네비게이션 전체 영역 표시/숨김
mainNav.forEach(function(item){
  item.addEventListener('mouseenter', function(){
    // 모바일에서는 실행하지 않음
    if(isMobile()) return;

    // 메인 래퍼 활성화
    mainNavWrapper.classList.add('active');
    navWrap.classList.add('active');
    body.classList.add('menu-open');
    
    // 모든 서브메뉴 비활성화
    subNav.forEach(sub => sub.classList.remove('active'));

    // 해당하는 서브메뉴만 활성화
    let targetId = this.dataset.target;
    let targetSubmenu = document.getElementById(targetId);
    if(targetSubmenu){
      targetSubmenu.classList.add('active');
      console.log(targetId)
    }
  })
})

// main-nav 영역에서 벗어나면 전체 닫기
document.querySelector('.main-nav').addEventListener('mouseleave', function(){
  // 모바일에서는 실행하지 않음
  if(isMobile()) return;

  setTimeout(() => {
    if(!mainNavWrapper.matches(':hover'))
    {
      body.classList.remove('menu-open');
      mainNavWrapper.classList.remove('active');
      navWrap.classList.remove('active');
      subNav.forEach(sub => sub.classList.remove('active'));
    }
  }, 100);
})

// 서브메뉴 래퍼에서 마우스가 벗어나면 닫기
mainNavWrapper.addEventListener('mouseleave', function(){
  this.classList.remove('active');
  body.classList.remove('menu-open');
  navWrap.classList.remove('active');
  subNav.forEach(sub => sub.classList.remove('active'));
})

// 서브 메뉴 열린상태 유지
subNav.forEach(submenu => {
  submenu.addEventListener('mouseenter', function(){
    this.classList.add('active')
  })
})

//모바일 햄버거 토글
let menuToggle = document.getElementById('menuToggle');
let mobileMenu = document.getElementById('mobileMenu');

// 스크롤 위치 저장 변수
let scrollPosition = 0;

menuToggle.addEventListener('click',function(){
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  navWrap.classList.toggle('active');
  
  // 메뉴가 열릴 때
  if(mobileMenu.classList.contains('active')){
    // 현재 스크롤 위치 저장
    scrollPosition = window.pageYOffset;
    
    // body에 클래스 추가
    body.classList.add('menu-open');
    body.style.overflow = 'hidden';
    body.style.height = '100vh';
  } 
  // 메뉴가 닫힐 때
  else {
    // body 스타일 제거
    body.classList.remove('menu-open');
    body.style.removeProperty('overflow');
    body.style.removeProperty('height');
    
    // 저장된 스크롤 위치로 복원
    window.scrollTo(0, scrollPosition);
  }
})

//모바일 메뉴 아코디언
let accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item =>{
  let title = item.querySelector('.accordion-title');
  let content = item.querySelector('.accordion-content');

  title.addEventListener('click',function(){
    let isActive = item.classList.contains('active')
  
  accordionItems.forEach(i=>{
    i.classList.remove('active');
    i.querySelector('.accordion-content').classList.remove('active')
  })
  if(!isActive){
    item.classList.add('active');
    content.classList.add('active');
  }
  })
})

//아무 곳이나 클릭했을 때 메뉴 닫기
document.addEventListener('click',function(e){
  // 모바일 메뉴가 열려있을 때만 실행
  if(mobileMenu.classList.contains('active')){
    // 클릭한 곳이 mobileMenu 안도 아니고, menuToggle도 아닐 때
    if(!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)){
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      navWrap.classList.remove('active');
      
      // body 스타일 제거 및 스크롤 위치 복원
      body.classList.remove('menu-open');
      body.style.removeProperty('overflow');
      body.style.removeProperty('height');
      window.scrollTo(0, scrollPosition);
    }
  }
})

//푸터 아코디언
let accordionTitles = document.querySelectorAll('.footer-accordion-title');

accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    let item = title.closest('.footer-accordion-item');
    item.classList.toggle('active');
  });
});
//탭
let tabBtn = document.querySelectorAll('.tab-btn');
let tabContent = document.querySelectorAll('.tab-content')

//탭
tabBtn.forEach(function(btn){
  btn.addEventListener('click', function(){
    tabBtn.forEach(function(b){
      b.classList.remove('active');
    });
    
    this.classList.add('active');

    tabContent.forEach(function(con){
      con.classList.remove('active');

      let targetId = btn.getAttribute('data-tab');
      tabContent.forEach(function(con){
        if(con.id === targetId){
          con.classList.add('active')
        }else{
          con.classList.remove('active')
        }
      })
    })
  })
})

//카드 애니메이션 
// AI참고 이 부분 다시 이해 필요
// ===== 카드 이미지 스크롤 애니메이션 =====
//카드요소가 화면에 50%이상 보일 때 액티브 클래스 추가(if문 활용)
function initCardScrollAnimation() {
  if (window.innerWidth <= 728) {
    const cardItems = document.querySelectorAll('.card-img li');
    
    const observerOptions = {
      threshold: 0.5, // 50% 보일 때
      rootMargin: '0px'
    };
    
    //요소가 화면에 들어왔는지 감시하는 객체 생성
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);
    
    cardItems.forEach(item => {
      observer.observe(item);
    });
  }
}

// 페이지 로드 시 실행
window.addEventListener('DOMContentLoaded', initCardScrollAnimation);

// 리사이즈 시 재초기화
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    initCardScrollAnimation();
  }, 250);
});

document.addEventListener('DOMContentLoaded', function () {
  const popupWrapper = document.querySelector('.pop-up-wrapper');
  const closeButton = document.querySelector('.pop-up-title img');
  const body = document.body;

  const isMainPage =
    window.location.pathname === '/' ||
    window.location.pathname.endsWith('index.html');

  function showPopup() {
    popupWrapper.style.display = 'block';
    body.classList.add('popup-active');
  }

  function closePopup() {
    popupWrapper.style.display = 'none';
    body.classList.remove('popup-active');
  }

  if (isMainPage) {
    showPopup();
  }

  closeButton.addEventListener('click', closePopup);

  popupWrapper.addEventListener('click', function (e) {
    if (e.target === popupWrapper) {
      closePopup();
    }
  });
});

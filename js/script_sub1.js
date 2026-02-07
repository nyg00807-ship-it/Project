/* 알림 아코디언 */
let noticeAcco = document.querySelectorAll('.noticeAcco-title')

noticeAcco.forEach(title => {
  title.addEventListener('click', () => {
    let item = title.closest('.noticeAcco-item');
    
    // 현재 아이템이 이미 열려있는지 확인
    let isActive = item.classList.contains('active');
    
    // 모든 아코디언 닫기
    document.querySelectorAll('.noticeAcco-item').forEach(otherItem => {
      otherItem.classList.remove('active');
    });
    
    // 현재 아이템이 닫혀있었다면 열기 (이미 열려있었다면 닫힌 상태 유지)
    if (!isActive) {
      item.classList.add('active');
    }
  })
})

/* 셀렉트 박스 */
let selectBox = document.querySelector('.selectBox');
let label = selectBox.querySelector('.label');
let optionList = selectBox.querySelector('.optionList');
let optionItems = selectBox.querySelectorAll('.optionItem');

/* 셀렉트 박스 열기 */
selectBox.addEventListener('click', function(e){
  if(e.target.classList.contains('optionItem'))return;
  selectBox.classList.toggle('active');
})

//옵션선택
optionItems.forEach(item => {
  item.addEventListener('click', function(){
    //선택된 값을 label에 표시
    label.textContent = this.textContent;

    //이전 선택 제거
    optionItems.forEach( opt => opt.classList.remove('selected'));

    //현재 선택 표시
    this.classList.add('selected');

    //셀렉트 박스 닫기
    selectBox.classList.remove('active');
  });
});

//외부 클릭 시 닫기
document.addEventListener('click',function(e){
  if(!selectBox.contains(e.target)){
    selectBox.classList.remove('active');
  }
});

// 링크이동
function attachRowClickEvents() {
  const rows = noticeTableBody.querySelectorAll('tr.notice-item');
  rows.forEach(row => {
    row.addEventListener('click', function() {
      const link = this.getAttribute('data-href');
      if (link === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  });
}

//링크이동2
const boxLink = document.querySelector('.box-bg li:nth-child(3)');

boxLink.addEventListener('click', function () {
  const link = this.getAttribute('data-href');
  if (link === '#') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

// 페이지네이션 설정
const itemsPerPage = 10; // 페이지당 표시할 항목 수
let currentPage = 1;
let totalPages = 1;
let isFirstLoad = true; // 첫 로드 여부 확인 변수 추가

// DOM 요소
const noticeTableBody = document.querySelector('.notice-table tbody');
const numbersList = document.getElementById('numbers');
const arrowDoubleLeft = document.querySelector('.arrow-double-left');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const arrowDoubleRight = document.querySelector('.arrow-double-right');

// 초기화 함수
function initPagination() {
  // 테이블에서 현재 데이터 가져오기
  const rows = noticeTableBody.querySelectorAll('tr.notice-item');
  allNotices = Array.from(rows).map(row => row.outerHTML);
  
  // 전체 페이지 수 계산
  totalPages = Math.ceil(allNotices.length / itemsPerPage);
  
  // 페이지네이션 렌더링
  renderPagination();
  renderPage(currentPage, false); // 첫 로드 시에는 스크롤 안 함
  
  // 이벤트 리스너 등록
  attachEventListeners();
  
  // 첫 로드 완료
  isFirstLoad = false;
}

// 페이지 렌더링
function renderPage(page, shouldScroll = true) {
  currentPage = page;

  const isMobile = window.innerWidth <= 768;
  
  // 현재 페이지에 해당하는 데이터 계산
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = allNotices.slice(startIndex, endIndex);
  
  // 테이블 업데이트
  noticeTableBody.innerHTML = pageData.join('');
  
  // 행 클릭 이벤트 다시 등록
  attachRowClickEvents();
  
  // 페이지네이션 번호 업데이트
  updatePaginationNumbers();

  // 페이지 클릭 시에만 스크롤
  if (shouldScroll && !isFirstLoad) {
    window.scrollTo({
      top: isMobile ? 300 : 400,
      behavior: 'smooth'
    });
  }
}

// 페이지네이션 번호 생성
function renderPagination() {
  // 모바일인지 확인 (768px 이하)
  const isMobile = window.innerWidth <= 768;
  const maxVisiblePages = isMobile ? 5 : 10; // 모바일: 5개, PC: 10개
  
  let startPage = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  
  numbersList.innerHTML = '';
  
  for (let i = startPage; i <= endPage; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = i;
    
    if (i === currentPage) {
      li.classList.add('active');
    }
    
    li.appendChild(a);
    li.addEventListener('click', (e) => {
      e.preventDefault();
      renderPage(i, true); // 페이지 클릭 시에는 스크롤 true
    });
    
    numbersList.appendChild(li);
  }
}

// 페이지네이션 번호 업데이트
function updatePaginationNumbers() {
  // 모바일인지 확인
  const isMobile = window.innerWidth <= 768;
  const maxVisiblePages = isMobile ? 5 : 10;
  
  const currentGroup = Math.floor((currentPage - 1) / maxVisiblePages);
  const startPage = currentGroup * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  
  // 현재 표시된 페이지 범위와 다르면 다시 렌더링
  const firstPageNum = parseInt(numbersList.querySelector('li:first-child a').textContent);
  if (firstPageNum !== startPage) {
    renderPagination();
    return;
  }
  
  // 활성 페이지 표시 업데이트
  const pageItems = numbersList.querySelectorAll('li');
  pageItems.forEach(li => {
    const pageNum = parseInt(li.querySelector('a').textContent);
    if (pageNum === currentPage) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });
}

// 이벤트 리스너 등록
function attachEventListeners() {
  // 첫 페이지로
  arrowDoubleLeft.addEventListener('click', () => {
    if (currentPage !== 1) {
      renderPage(1, true); // 화살표 클릭 시에는 스크롤 true
    }
  });
  
  // 이전 페이지
  arrowLeft.addEventListener('click', () => {
    if (currentPage > 1) {
      renderPage(currentPage - 1, true); // 화살표 클릭 시에는 스크롤 true
    }
  });
  
  // 다음 페이지
  arrowRight.addEventListener('click', () => {
    if (currentPage < totalPages) {
      renderPage(currentPage + 1, true); // 화살표 클릭 시에는 스크롤 true
    }
  });
  
  // 마지막 페이지로
  arrowDoubleRight.addEventListener('click', () => {
    if (currentPage !== totalPages) {
      renderPage(totalPages, true); // 화살표 클릭 시에는 스크롤 true
    }
  });
}


// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
  // DOM 요소가 존재하는지 확인
  if (noticeTableBody && numbersList) {
    initPagination();
    
    // 화면 크기 변경 시 페이지네이션 재렌더링
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        renderPagination();
      }, 250);
    });
  }
});
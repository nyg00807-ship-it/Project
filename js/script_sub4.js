/* 지식 아코디언 */
let knowledgeAcco = document.querySelectorAll('.knowledgeAcco-title')

knowledgeAcco.forEach(title => {
  title.addEventListener('click', () => {
    let item = title.closest('.knowledgeAcco-item');
    
    // 현재 아이템이 이미 열려있는지 확인
    let isActive = item.classList.contains('active');
    
    // 모든 아코디언 닫기
    document.querySelectorAll('.knowledgeAcco-item').forEach(otherItem => {
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
//classList.contains('optionItem'): 클릭된 요소가 optionItem 클래스를 가지고 있는지 확인 
//만약 옵션 아이템을 클릭했다면 여기서 멈추기

//옵션선택
optionItems.forEach(item => {
  item.addEventListener('click', function(){
    //선택된 값을 label에 표시
    label.textContent = this.textContent;

    //이전 선택 제거
    optionItems.forEach( opt => opt.classList.remove('selected'));
    //화살표 함수-중괄호 생략: 코드가 단 한 줄일 때만 가능

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

// 페이지네이션
const archiveData = [
  {
    img: "images/archive01.png",
    title: "2024년 국토교통 RnD 주요성과 사례집",
    alt: "성과집"
  },
  {
    img: "images/archive02.png",
    title: "2023년 국토교통 RnD 주요성과",
    alt: "성과집"
  },
  {
    img: "images/archive03.png",
    title: "2022년 국토교통 RnD 대표성공 사례집",
    alt: "성과집"
  },
  {
    img: "images/archive04.jpg",
    title: "2021년 국토교통 RnD 대표성과 사례집",
    alt: "성과집"
  },
  {
    img: "images/archive05.png",
    title: "2020년 국토교통 RnD 대표성과 사례집",
    alt: "성과집"
  },
  {
    img: "images/archive06.jpg",
    title: "2019년 국토교통 RnD 성과사례집",
    alt: "성과집"
  },
  {
    img: "images/archive07.jpg",
    title: "2018 국토교통RnD 우수성과 25선",
    alt: "성과집"
  },
  {
    img: "images/archive08.jpg",
    title: "2017 국토교통RnD 우수성과 25선",
    alt: "성과집"
  },
  {
    img: "images/archive09.png",
    title: "2016 국토교통RnD 우수성과 20선",
    alt: "성과집"
  },
  {
    img: "images/archive10.jpg",
    title: "2015 국토교통RnD 우수성과 25선",
    alt: "성과집"
  },
  {
    img: "images/archive11.jpg",
    title: "2014 국토교통RnD 우수성과 20선",
    alt: "성과집"
  },
  {
    img: "images/archive12.jpg",
    title: "2013 국토교통RnD 우수성과 20선",
    alt: "성과집"
  },
  {
    img: "images/archive13.jpg",
    title: "2012 건설교통RnD 우수성과 20선(스마트이노베이션)",
    alt: "성과집"
  },
  {
    img: "images/archive14.jpg",
    title: "2011 건설교통RnD 우수성과 15선",
    alt: "성과집"
  },
  {
    img: "images/archive15.jpg",
    title: "2010 건설교통RnD 우수성과 14선",
    alt: "성과집"
  },
  {
    img: "images/archive16.jpg",
    title: "국토해양R&D성과집(신사업체계 기준)",
    alt: "성과집"
  },
  {
    img: "images/archive17.jpg",
    title: "국토해양R&D성과집(기존 사업체계)",
    alt: "성과집"
  },
  {
    img: "images/archive18.jpg",
    title: "건설R&D성과집  썸네일",
    alt: "성과집"
  }
];

// 페이지네이션 설정 (AI참고)
const itemsPerPage = 8; // 한 페이지에 보여줄 아이템 수
let currentPage = 1; // 현재 페이지 (처음엔 1페이지)
const totalPages = Math.ceil(archiveData.length / itemsPerPage); // Math.ceil(18 / 8) = 3페이지

// 아이템 렌더링 함수
function renderItems(page) {
  const startIdx = (page - 1) * itemsPerPage;
  //1페이지: (1-1) × 8 = 0 → 0번째부터 시작
  //2페이지: (2-1) × 8 = 8 → 8번째부터 시작
  //3페이지: (3-1) × 8 = 16 → 16번째부터 시작

  const endIdx = startIdx + itemsPerPage;
  //1페이지: 0 + 8 = 8 → 0~7번 인덱스 (8개)
  //2페이지: 8 + 8 = 16 → 8~15번 인덱스 (8개)
  //3페이지: 16 + 8 = 24 → 16~17번 인덱스 (2개만 있음)
  const pageData = archiveData.slice(startIdx, endIdx);
  //slice(): 배열의 일부를 잘라냄
  //1페이지: archiveData.slice(0, 8) → 0~7번 아이템
  //2페이지: archiveData.slice(8, 16) → 8~15번 아이템
  //3페이지: archiveData.slice(16, 24) → 16~17번 아이템 (2개만)
  
  const archiveList = document.getElementById('archiveList');
  archiveList.innerHTML = pageData.map(item => `
    <li>
      <div class="archive-img">
        <img src="${item.img}" alt="${item.alt}">
      </div>
      <p>${item.title}</p>
      <button>PDF</button>
    </li>
  `).join('');
}
  //map(): 배열의 각 아이템을 HTML 문자열로 변환
  //join(''): 배열을 하나의 문자열로 합침
  //innerHTML: <ul> 태그 안에 생성한 HTML 삽입

// 페이지 번호 렌더링 함수
function renderPagination() {
  const numbers = document.getElementById('numbers');
  numbers.innerHTML = ''; //기존 번호 삭제
  
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    if (i === currentPage) {
      li.classList.add('active');
    }
    li.innerHTML = `<a href="#">${i}</a>`;
    li.addEventListener('click', (e) => {
      e.preventDefault(); //링크 기본 동작 막기
      goToPage(i); //해당 페이지로 이동
    });
    numbers.appendChild(li); //번호 추가
  }
}
  //totalPages = 3이면 1, 2, 3 버튼 생성
  //현재 페이지에만 active 클래스 추가 (파란색 표시)
  //각 번호 클릭 시 goToPage(i) 함수 실행


// 페이지 이동 함수
function goToPage(page) {
  if (page < 1 || page > totalPages) return; //범위 벗어나면 종료
  currentPage = page; //현재 페이지 업데이트
  renderItems(currentPage); //해당 페이지 아이템 표시
  renderPagination(); //페이지 번호 다시 그리기(active위치 변경)
}
  //유효성 검사: 페이지 번호가 1~3 범위 안에 있는지 확인
  //현재 페이지 업데이트: currentPage 변수 변경
  //아이템 다시 그리기: 새 페이지의 아이템들 표시
  //번호 다시 그리기: active 클래스 위치 변경


// 화살표 버튼 이벤트
document.querySelector('[data-action="first"]').addEventListener('click', () => goToPage(1));
document.querySelector('[data-action="prev"]').addEventListener('click', () => goToPage(currentPage - 1));
document.querySelector('[data-action="next"]').addEventListener('click', () => goToPage(currentPage + 1));
document.querySelector('[data-action="last"]').addEventListener('click', () => goToPage(totalPages));

// 초기 렌더링
renderItems(currentPage);
renderPagination();



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


// 탭 전환 기능
    const tabButtons = document.querySelectorAll('.tab-btn');
    const logMember = document.querySelector('.log-member');
    const logNonmember = document.querySelector('.log-nonmember');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabType = button.getAttribute('data-tab');
        
        // 모든 탭 버튼의 active 클래스 제거
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // 클릭한 버튼에 active 클래스 추가
        button.classList.add('active');
        
        // 콘텐츠 전환
        if (tabType === 'member') {
          logMember.classList.add('active');
          logNonmember.classList.remove('active');
        } else {
          logMember.classList.remove('active');
          logNonmember.classList.add('active');
        }
      });
    });
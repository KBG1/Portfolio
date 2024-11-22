const sections = document.querySelectorAll('.section');
let currentSection = 0;

// 섹션 활성화 처리 함수
function handleSectionActivation() {
  // 모든 섹션 순회
  sections.forEach((section, index) => {
    const profileElement = section.querySelector('.addtional'); // 추가 요소 찾기
    const sectionTitle = section.querySelector('.section-title');
    if (index === currentSection) {
      // 현재 활성화된 섹션
      if (profileElement) {
        // 500ms 뒤에 추가 요소 나타나도록 설정
        setTimeout(() => {
          profileElement.style.opacity = '1';
          profileElement.style.transform = 'translateY(0)';
        }, 500);
      }
      // 가운데 정렬 설정
      if (sectionTitle) {
        sectionTitle.style.justifyContent = 'center';
        sectionTitle.style.display = 'flex';
      }
    } else {
      // 비활성화된 섹션: 숨기기
      if (profileElement) {
        profileElement.style.opacity = '0';
        profileElement.style.transform = 'translateY(20px)';
      }
    }
  });
}

// 초기화: 추가 요소 숨김 처리
sections.forEach((section) => {
  const profileElement = section.querySelector('.addtional');
  if (profileElement) {
    profileElement.style.opacity = '0';
    profileElement.style.transform = 'translateY(20px)';
    profileElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  }
});

// 네비게이션 링크 클릭 시 섹션 활성화 처리
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetIndex = Array.from(sections).findIndex(
      (section) => section.id === targetId
    );

    if (targetIndex !== -1) {
      currentSection = targetIndex;
      sections[currentSection].scrollIntoView({ behavior: 'smooth' });

      // 활성화 처리
      handleSectionActivation();
    }
  });
});

// 스크롤(휠) 이벤트로 섹션 활성화 처리
window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    // 스크롤 다운
    currentSection = Math.min(currentSection + 1, sections.length - 1);
  } else {
    // 스크롤 업
    currentSection = Math.max(currentSection - 1, 0);
  }

  sections[currentSection].scrollIntoView({ behavior: 'smooth' });

  // 활성화 처리
  handleSectionActivation();
});

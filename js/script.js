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

const slider = document.getElementById("skills-slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const totalPages = slider.querySelectorAll(".skills-page").length;

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
  else if(currentIndex === 0){
    currentIndex = totalPages - 1;
    updateSliderPosition();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < totalPages - 1) {
    currentIndex++;
    updateSliderPosition();
  }
  else if(currentIndex === totalPages - 1){
    currentIndex = 0;
    updateSliderPosition();
  }
});

const projectData = [
  {
    title: "설문으로 발견하는 나에 대한 새로운 시선, 너에게 난",
    duration: "2024.10 - 2023.12 (5주)",
    TechStack: [
      "React 18",
      "Redux",
      "TypeScript",
      "TailwindCSS",
    ],
    role: [
      "설문 데이터 퍼블리싱 및 개발",
      "챗봇 설문지 퍼블리싱 및 구현",
      "닉네임 검색 구현",
    ],
    achievement: [
      "공통으로 사용되는 컴포넌트를 모두 분리하여 재사용성 향상",
      "디바운싱을 통해 닉네임 검색 시 발생하는 API 호출을 줄임으로써 성능 최적화를 수행",
      "1차 배포 및 2차 배포를 통해 사용자 피드백을 수용, 이후 피드백을 바탕으로 수정하여 사용자 경험 향상"
    ],
    learning: [
      "디바운싱 이외에도 API 성능 최적화에 대해 관심을 더 가질 수 있는 계기가 되었음",
      "다양한 사용자 경험 개선 방법 학습",
    ],
    outcome: [
      "1, 2차 배포 후 WAU 600명이상 달성",
      "프로젝트 우수상 수상 (1등)"
    ],
    images: [
      {description:"화면1", src: "./images/metoyou/metoyou1.png"},
      {description:"화면2", src: "./images/metoyou/metoyou2.png"},
    ],
    gitLink: "https://github.com/togather209/togather",
  },
  {
    title: "부자가 되기 위한 한 번의 선택, WonTouch",
    duration: "2024.08 - 2024.10 (8주)",
    TechStack: [
      "React 18",
      "Redux",
      "TypeScript",
      "TailwindCSS",
    ],
    role: [
      "도트 디자인 제작 (Aseprite 및 PhotoShop으로 캐릭터 및 작물 디자인)",
      "웹소켓을 통한 실시간 데이터 업데이트",
      "캐릭터 실시간 이동 및 충돌체 구현 (Phaser3 및 WebSocket 활용)",
      "마을/거래소 상호작용 퍼블리싱 및 구현",
      "라운드 별 종료 화면 및 최종 결과화면 퍼블리싱 및 구현"
    ],
    achievement: [
      "웹소켓 연결 부하를 줄여 실시간 캐릭터의 이동 정보를 안정적으로 전달 (350ms 주기 설정)",
      "맵 로딩 최적화로 렌더링 시간을 20초 → 2초로 단축",
      "마을 작물 구매/판매시 수량을 실시간으로 반영하여 사용자편의성을 확보 "
    ],
    learning: [
      
    ],
    outcome: [
      "초기 사용자 48명으로부터 받은 피드백을 기반으로 수정하여 사용자 경험 약 40% 향상",
      "경험치를 통한 레벨업, 마일리지를 통한 아바타 구매로 게임의 몰입도를 향상 시켰음"
    ],
    images: [
      {description: "마을 화면", src: "./images/wontouch/wontouch1.png"},
      {description: "거래소 화면", src: "./images/wontouch/wontouch2.png"},
      {description: "라운드 종료 화면", src: "./images/wontouch/wontouch3.png"},
      {description: "작물가격 변동 화면", src: "./images/wontouch/wontouch4.png"},
      {description: "마지막 라운드 종료 화면", src: "./images/wontouch/wontouch5.png"},
      {description: "결과 화면", src: "./images/wontouch/wontouch6.png"},
    ],
    gitLink: "https://github.com/WONTOUCH",
  },
  {
    title: "일정부터 정산까지, Togather",
    duration: "2024.07 - 2024.08 (7주)",
    TechStack: [
      "React 18",
      "Redux",
      "TailwindCSS",
    ],
    role: [
      "회원가입 / 로그인 퍼블리싱 및 구현",
      "지갑 / 송금페이지 퍼블리싱 및 구현",
      "SSE를 이용한 실시간 공동 작업 기능 구현",
    ],
    achievement: [
      "SSE로 실시간 일정 공유 및 찜 목록 업데이트 구현하여 사용자들의 편의성을 높임",
      "자체 Pay 기능으로 계좌 연동 한번이면 쉽게 충전 / 송금이 가능",
      "Password 블라인드 처리 기능으로 보안성 향상",
      "Redux 사용시 새로고침할 때 Token이 초기화 되는 문제가 발생하여, RefreshToken함수를 구현하여 적용, 새로고침 시에도 토큰이 유지되도록 하였음"
    ],
    learning: [
      "보안성 강화를 위한 다양한 방법을 생각해볼 수 있었음",
      "Jira, GitLab을 통해 수월한 일정 관리와 코드 공유를 통해, 프로젝트에서 일정 관리와 코드 리뷰등이 얼마나 중요한지 깨닫게 됨",
    ],
    outcome: [
      "RefreshToken을 이용한 로그인 상태 유지 문제 해결",
      "프로젝트 우수상 수상 (2등)",
      "사용자 리뷰를 잘 받지 못한 것 같아 아쉬웠음",
    ],
    images: [
      {description:"화면1", src: "./images/togather/togather1.png",},
      {description:"화면2", src: "./images/togather/togather2.png",},
      {description:"화면3", src: "./images/togather/togather3.png",}
    ],
    gitLink: "https://github.com/togather209/togather",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const modalTitle = document.querySelector(".modal-title");
  const modalDuration = document.querySelector(".modal-duration");
  const modalTechStack = document.querySelector(".modal-tech-stack");
  const modalRole = document.querySelector(".modal-role");
  const modalAchievement = document.querySelector(".modal-achievement");
  const modalLearning = document.querySelector(".modal-learning");
  const modalOutcome = document.querySelector(".modal-outcome");
  const modalImages = document.querySelector(".modal-images");
  const modalGitLink = document.querySelector(".modal-git-link");
  const projectCards = document.querySelectorAll(".project-card");

  function disableBackgroundScroll() {
    document.body.classList.add("modal-open");
  }

  function enableBackgroundScroll() {
    document.body.classList.remove("modal-open");
  }

  function closeModal() {
    modal.style.display = "none";
    enableBackgroundScroll();
  }

  projectCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const project = projectData[index];

      modalTitle.textContent = project.title;
      modalDuration.textContent = `개발 기간: ${project.duration}`;
      modalTechStack.textContent = `기술 스택: ${project.TechStack.join(", ")}`;
      modalRole.innerHTML = project.role.map((role) => `<li>${role}</li>`).join("");
      modalAchievement.innerHTML = project.achievement
        .map((achieve) => `<li>${achieve}</li>`)
        .join("");
      modalLearning.innerHTML = project.learning
        .map((learn) => `<li>${learn}</li>`)
        .join("");
      modalOutcome.innerHTML = project.outcome
        .map((outcome) => `<li>${outcome}</li>`)
        .join("");
        modalImages.innerHTML = project.images
        .map((image, idx, arr) => `
          <div class="image-container ${idx === arr.length - 1 && arr.length % 2 !== 0 ? '.last-image' : ''}">
            <p class="image-description">${idx + 1}. ${image.description}</p>
            <img src="${image.src}" alt="Project Screenshot" />
          </div>
        `)
        .join("");
        modalGitLink.innerHTML = `<a href="${project.gitLink}" target="_blank">${project.title}</a>`;
      modal.style.display = "flex";
      disableBackgroundScroll();
    });
  });

  document.querySelector(".modal-close").addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (!modalContent.contains(event.target)) {
      closeModal();
    }
  });

  modalContent.addEventListener("wheel", (event) => {
    event.stopPropagation();
  });
});


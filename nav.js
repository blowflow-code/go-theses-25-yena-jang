// 네비게이션과 링크, 섹션(기사)들 가져오기
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

// 실제 스크롤에 따라 하이라이트할 대상 (6개)
// !! HTML에 존재하지 않는 id가 있으면 null이 들어옴
const articles = [
  document.getElementById('introduction'),
  document.getElementById('chapter'),
  document.getElementById('chapter2'),
  document.getElementById('chapter3'),
  document.getElementById('conclusion'),
  document.getElementById('bibliography')
];

// 스크롤 위치에 따라 nav 클래스와 a.active 상태 업데이트
function updateActiveNav() {
  const scrollPos = window.scrollY;

  articles.forEach((article, index) => {
    // (1) article이 null인지 확인
    if (!article) {
      return;  // HTML에 해당 id가 없으면 넘어감
    }

    // (2) 해당 섹션 범위에 스크롤이 들어오면
    if (
      scrollPos >= article.offsetTop - 100 &&
      scrollPos < article.offsetTop + article.offsetHeight -100
    ) {
      // 1) 모든 링크에서 .active 제거
      navLinks.forEach(link => link.classList.remove('active'));

      // 2) 현재 섹션 id와 매칭되는 링크에 .active 추가
      const activeLink = document.querySelector(
        `nav ul li a[href="#${article.id}"]`
      );
      if (activeLink) {
        activeLink.classList.add('active');
      }

      // 3) nav 태그에 붙은 active1~6 클래스 제거
      nav.classList.remove(
        'active1',
        'active2',
        'active3',
        'active4',
        'active5',
        'active6'
      );

      // 4) 이번 인덱스(index+1)에 해당하는 activeN 클래스 추가
      nav.classList.add('active' + (index + 1));
    }
  });
}

// 스크롤 시 updateActiveNav 호출
window.addEventListener('scroll', updateActiveNav);
// 초기에도 한 번 실행
updateActiveNav();

// -------------- 나머지 숨김/노출 로직 (예시) --------------
window.addEventListener('wheel', () => {
  nav.classList.remove('keepVisible');
  nav.classList.add('hidden');
});

window.addEventListener('scroll', () => {
  if (!nav.classList.contains('keepVisible')) {
    nav.classList.add('hidden');
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.add('keepVisible');
    nav.classList.remove('hidden');
  });
});
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    nav.classList.add('keepVisible');
    nav.classList.remove('hidden');
  });
});

window.addEventListener('mousemove', e => {
  if (e.clientY < 50) {
    nav.classList.remove('hidden');
  }
});

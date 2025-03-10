
  // 마지막 스크롤 위치를 저장할 변수
  let lastScrollY = window.pageYOffset;
  
  // 모든 하단 marker 선택 (마지막 article에는 marker가 없음)
  const markers = document.querySelectorAll('.bottom-marker');
  
  // Intersection Observer 설정: marker가 완전히 뷰포트 내에 들어왔을 때 실행 (threshold: 1.0)
  const observerOptions = {
    root: null,
    threshold: 1.0
  };
  
  const markerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // marker가 완전히 보이고, 현재 스크롤 방향이 아래쪽인 경우
      if (entry.isIntersecting && window.pageYOffset > lastScrollY) {
        const currentArticle = entry.target.parentElement;
        const nextArticle = currentArticle.nextElementSibling;
        if (nextArticle) {
          nextArticle.scrollIntoView({ behavior: 'smooth' });
          nextArticle.classList.add('highlight');
          setTimeout(() => {
            nextArticle.classList.remove('highlight');
          }, 2000);
        }
      }
    });
    lastScrollY = window.pageYOffset;
  }, observerOptions);
  
  markers.forEach(marker => markerObserver.observe(marker));

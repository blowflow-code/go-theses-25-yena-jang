document.addEventListener("DOMContentLoaded", () => {
  const bodyStyle = getComputedStyle(document.body);
  const bodyFontSize = parseFloat(bodyStyle.fontSize);

  // 문서 전체 높이(스크롤 포함) 계산
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  // 격자 컨테이너 높이를 문서 높이에 맞춤
  const gridContainer = document.getElementById('grid-container');
  gridContainer.style.height = docHeight + 'px';

  // 왼/오른쪽 격자 영역
  const gridLeft = document.getElementById('grid-left');
  const gridRight = document.getElementById('grid-right');

  // 첫 격자 시작 위치 (12vh 아래)
  const startY = window.innerHeight * 0.12;

  // 작은 격자 간격(2em)을 px로 환산
  const smallStep = 2 * bodyFontSize;

  // 현재 y좌표
  let currentY = startY;
  // 라인 인덱스(1부터 시작)
  let lineIndex = 1;

  while (currentY < docHeight) {
    // 10번째마다 큰 격자
    const isBigLine = (lineIndex % 10 === 0);

    // ----- 왼쪽 라인 생성 -----
    const lineL = document.createElement('div');
    lineL.classList.add('grid-line');
    lineL.style.top = currentY + 'px';
    lineL.style.right = '0'; // 오른쪽 정렬

    // ----- 오른쪽 라인 생성 -----
    const lineR = document.createElement('div');
    lineR.classList.add('grid-line');
    lineR.style.top = currentY + 'px';
    lineR.style.left = '0'; // 왼쪽 정렬

    // 작은 격자/큰 격자 스타일 구분
    if (isBigLine) {
      lineL.classList.add('big-line');
      lineR.classList.add('big-line');
    } else {
      lineL.classList.add('small-line');
      lineR.classList.add('small-line');
    }

    // 격자를 실제 DOM에 추가
    gridLeft.appendChild(lineL);
    gridRight.appendChild(lineR);

    // 큰 격자일 경우에만 숫자 라벨 표시
    if (isBigLine) {
      // N/S 구분 (상하단 기준)
      const halfDoc = docHeight / 2;
      const region = (currentY < halfDoc) ? 'N' : 'S';
      const labelText = Math.round(currentY) + ' ' + region;

      // 왼쪽 라벨
      const labelL = document.createElement('div');
      labelL.classList.add('grid-label', 'left-label');
      labelL.style.top = currentY + 'px'; // 기존 위치 유지
      labelL.style.right = '3em';
      labelL.style.transform = 'translateY(-0.7em)'; // 1em 위로 이동
      labelL.textContent = labelText;
      gridLeft.appendChild(labelL);

      // 오른쪽 라벨
      const labelR = document.createElement('div');
      labelR.classList.add('grid-label', 'right-label');
      labelR.style.top = currentY + 'px'; // 기존 위치 유지
      labelR.style.left = '3em';
      labelR.style.transform = 'translateY(-0.7em)'; // 1em 위로 이동
      labelR.textContent = labelText;
      gridRight.appendChild(labelR);
    } // <-- 여기서 if 문을 닫아야 함

    // 다음 라인 위치
    currentY += smallStep;
    lineIndex++;
  } // <-- while 루프 닫기
});

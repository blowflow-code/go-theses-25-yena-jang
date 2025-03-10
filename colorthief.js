/**
 * 1) ColorThief 라이브러리를 통해 이미지의 대표 색상을 추출하고
 * 2) .palette / .dot 및 canvas 등을 동적으로 생성하여 삽입
 * 3) HTML에는 미리 아무 요소도 없이, JS로만 생성
 */

// 1. ColorThief 인스턴스
const colorThief = new ColorThief();

// 2. 동적으로 figure + img 삽입
const figure = document.createElement('figure');
document.body.appendChild(figure);

// 3. 이미지 생성
const image = new Image();
image.src = 'media/chapter3/Osmose1.png';  // 로컬/동일 도메인 경로
image.alt = 'Osmose';

// figure에 이미지 추가
figure.appendChild(image);

// 4. paletteOutput(.palette) 컨테이너 동적 생성
const paletteOutput = document.createElement('div');
paletteOutput.classList.add('palette');
document.body.appendChild(paletteOutput);

// 5. canvas(패턴용)도 추가할 수 있음
const patternCanvas = document.createElement('canvas');
document.body.appendChild(patternCanvas);

// 6. 이미지 로드 후 ColorThief 사용
image.addEventListener('load', () => {
  // (A) 이미지에서 팔레트(예: 3가지 색) 추출
  const palette = colorThief.getPalette(image, 3);

  // (B) 추출된 팔레트 색상 표시 (.dot)
  palette.forEach(color => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    paletteOutput.appendChild(dot);
  });

  // (C) canvas에 패턴 그리기
  patternCanvas.width = image.width;
  patternCanvas.height = image.height;

  const ctx = patternCanvas.getContext('2d');
  const dotSize = 10;

  for (let y = 0; y < patternCanvas.height; y += dotSize) {
    for (let x = 0; x < patternCanvas.width; x += dotSize) {
      // 랜덤 팔레트 색
      let randColor = palette[Math.floor(Math.random() * palette.length)];
      randColor = `rgb(${randColor[0]}, ${randColor[1]}, ${randColor[2]})`;
      ctx.fillStyle = randColor;
      ctx.fillRect(x, y, dotSize, dotSize);
    }
  }
});
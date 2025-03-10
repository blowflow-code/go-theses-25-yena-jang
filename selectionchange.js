document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const sidenotes = document.querySelectorAll(".sidenote"); // 모든 .sidenote 요소 선택
    const gridContainer = document.getElementById("grid-container"); 

    // 클릭하면 배경색 변경
    document.addEventListener("mousedown", () => {
      body.style.backgroundColor = "#0F6600"; // 클릭 시 배경색 변경
      sidenotes.forEach(el => el.style.backgroundColor = "#0F6600");
      if (gridContainer) gridContainer.style.backgroundColor = "";
    });
  
    // 드래그할 때 배경색 변경
    document.addEventListener("selectionchange", () => {
      if (window.getSelection().toString().length > 0) {
        body.style.backgroundColor = "black"; // 드래그 중 배경색
        sidenotes.forEach(el => el.style.backgroundColor = "black");
      sidenotes.forEach(el => el.style.backgroundColor = "black");
      if (gridContainer) gridContainer.style.backgroundColor = "";
      }
    });
  
    // 마우스 버튼을 떼면 원래 색상으로 복귀
    document.addEventListener("mouseup", () => {
      setTimeout(() => {
        body.style.backgroundColor = "white"; // 기본 색상으로 복귀
        sidenotes.forEach(el => el.style.backgroundColor = "white");
      }, 1300); // 약간의 지연을 줘서 효과를 자연스럽게 만듦
    });
  });
  
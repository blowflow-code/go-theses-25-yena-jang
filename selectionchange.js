// document.addEventListener("DOMContentLoaded", () => {
//     const body = document.body;
//     const sidenotes = document.querySelectorAll(".sidenote"); // 모든 .sidenote 요소 선택
//     const gridContainer = document.getElementById("grid-container"); 

//     // 클릭하면 배경색 변경
//     document.addEventListener("mousedown", () => {
//       body.style.backgroundColor = "#0F6600"; // 클릭 시 배경색 변경
//       sidenotes.forEach(el => el.style.backgroundColor = "#0F6600");
//       if (gridContainer) gridContainer.style.backgroundColor = "";
//     });
  
//     // 드래그할 때 배경색 변경
//     document.addEventListener("selectionchange", () => {
//       if (window.getSelection().toString().length > 0) {
//         body.style.backgroundColor = "black"; // 드래그 중 배경색
//         sidenotes.forEach(el => el.style.backgroundColor = "black");
//       sidenotes.forEach(el => el.style.backgroundColor = "black");
//       if (gridContainer) gridContainer.style.backgroundColor = "";
//       }
//     });
  
//     // 마우스 버튼을 떼면 원래 색상으로 복귀
//     document.addEventListener("mouseup", () => {
//       setTimeout(() => {
//         body.style.backgroundColor = "white"; // 기본 색상으로 복귀
//         sidenotes.forEach(el => el.style.backgroundColor = "white");
//       }, 1300); // 약간의 지연을 줘서 효과를 자연스럽게 만듦
//     });
//   });



  document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const sidenotes = document.querySelectorAll(".sidenote");
    const gridContainer = document.getElementById("grid-container");
  
    // Create a <style> tag for debug outline
    const debugStyle = document.createElement("style");
    debugStyle.id = "debug-outline-style";
    debugStyle.textContent = `* { outline: 1px solid #39FF14 !important; }`;
  
    // CLICK: Change background + show outlines
    document.addEventListener("mousedown", () => {
      body.style.backgroundColor = "#0F6600";
      sidenotes.forEach(el => el.style.backgroundColor = "#0F6600");
      if (gridContainer) gridContainer.style.backgroundColor = "";
  
      // Add outline style to head
      if (!document.getElementById("debug-outline-style")) {
        document.head.appendChild(debugStyle);
      }
    });
  
    // DRAG (text selection): Change background during selection
    document.addEventListener("selectionchange", () => {
      if (window.getSelection().toString().length > 0) {
        body.style.backgroundColor = "black";
        sidenotes.forEach(el => el.style.backgroundColor = "black");
        if (gridContainer) gridContainer.style.backgroundColor = "";
      }
    });
  
    // MOUSE UP: Reset background and remove outlines
    document.addEventListener("mouseup", () => {
      setTimeout(() => {
        body.style.backgroundColor = "white";
        sidenotes.forEach(el => el.style.backgroundColor = "white");
  
        // Remove debug outline style
        const existingStyle = document.getElementById("debug-outline-style");
        if (existingStyle) existingStyle.remove();
      }, 1300);
    });
  });
  
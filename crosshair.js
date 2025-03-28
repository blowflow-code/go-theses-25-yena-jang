const crosshair = document.querySelector('.video-wrapper .crosshair');


console.log( crosshair );

if (crosshair) {
  crosshair.addEventListener('mouseenter', (event) => {
    // 이벤트 버블링 방지
    event.stopPropagation();
    crosshair.parentNode.classList.add('triggered');
  });
}


// const hitarea = document.querySelector( '.video-wrapper .crosshair' );
// hitarea.addEventListener( 'mouseenter', triggerCrosshair );
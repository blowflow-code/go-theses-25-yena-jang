
  const overlay = document.querySelector('.tint-overlay');

  function showTint() {
    overlay.classList.add('active');
  }

  function hideTint() {
    overlay.classList.remove('active');
  }

  document.addEventListener('mousedown', showTint);
  document.addEventListener('mouseup', hideTint);
  document.addEventListener('touchstart', showTint);
  document.addEventListener('touchend', hideTint);

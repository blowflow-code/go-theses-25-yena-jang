function wrapWords(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const words = text.split(/(\s+)/);
      if (words.length > 1) {
        const fragment = document.createDocumentFragment();
        words.forEach(function(word) {
          if (word.trim().length > 0) {
            const span = document.createElement('span');
            span.className = 'hover-word';
            span.textContent = word;
            fragment.appendChild(span);
          } else {
            fragment.appendChild(document.createTextNode(word));
          }
        });
        node.parentNode.replaceChild(fragment, node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (['SCRIPT', 'STYLE', 'NOSCRIPT'].indexOf(node.tagName) === -1) {
        // 자식 노드들을 배열로 복사해둡니다.
        const children = Array.from(node.childNodes);
        children.forEach(child => {
          // requestIdleCallback을 사용해 브라우저 유휴시간에 처리
          if (window.requestIdleCallback) {
            requestIdleCallback(() => wrapWords(child));
          } else {
            // 지원하지 않을 경우 즉시 처리
            wrapWords(child);
          }
        });
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // 필요한 영역(예: <main>)만 처리하도록 변경 가능
    const target = document.body; // 또는 document.querySelector('main');
    wrapWords(target);
  });

  
  
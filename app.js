(() => {
  'use strict';

  // Sync footer copyright year dynamically
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Generate ambient floating sparks
  const ambientCanvas = document.getElementById('ambient-canvas');
  if (ambientCanvas) {
    const fragment = document.createDocumentFragment();
    const sparkCount = 32;

    for (let i = 0; i < sparkCount; i += 1) {
      const spark = document.createElement('div');
      spark.className = 'floating-spark';
      const size = Math.random() > 0.6 ? 4 : 2.5;
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.animationDelay = `${-Math.random() * 16}s`;
      spark.style.animationDuration = `${12 + Math.random() * 8}s`;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      fragment.appendChild(spark);
    }

    ambientCanvas.appendChild(fragment);
  }

  // Custom precision cursor tracking (desktop/pointer devices)
  const ringEl = document.getElementById('precision-ring');
  const dotEl = document.getElementById('precision-dot');

  if (ringEl && dotEl) {
    window.addEventListener(
      'mousemove',
      (event) => {
        const x = `${event.clientX}px`;
        const y = `${event.clientY}px`;
        ringEl.style.left = x;
        ringEl.style.top = y;
        dotEl.style.left = x;
        dotEl.style.top = y;
      },
      { passive: true }
    );

    const interactiveNodes = document.querySelectorAll('[data-cursor-target]');
    interactiveNodes.forEach((node) => {
      node.addEventListener('mouseenter', () => ringEl.classList.add('is-active'));
      node.addEventListener('mouseleave', () => ringEl.classList.remove('is-active'));
    });
  }
})();


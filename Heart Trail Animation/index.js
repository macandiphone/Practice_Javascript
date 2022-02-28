const body = document.querySelector('body');

body.addEventListener('mousemove', e => {
  const x = e.offsetX;
  const y = e.offsetY;
  const span = document.createElement('span');

  span.style.left = x + 'px';
  span.style.top = y + 'px';

  const size = Math.random() * 100;
  span.style.width = size + 'px';
  span.style.height = size + 'px';

  body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 3000);
});

const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (e) => {
  // console.log(e.pageX - btn.offsetLeft); -1 , 125
  // console.log(e.pageY - btn.offsetTop); -1 , 57

  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;

  btn.style.setProperty('--xPos', x + 'px');
  btn.style.setProperty('--yPos', y + 'px');
});

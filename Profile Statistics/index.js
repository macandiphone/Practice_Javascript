const countersEl = document.querySelectorAll('.counter');

countersEl.forEach(counterEL => {
  counterEL.innerText = '0';
  incrementCount();

  function incrementCount() {
    let currentNum = +counterEL.innerText;
    const dataCeil = counterEL.getAttribute('data-ceil');
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterEL.innerText = currentNum;
      setTimeout(incrementCount, 30);
    } else {
      counterEL.innerText = dataCeil;
    }
  }
});

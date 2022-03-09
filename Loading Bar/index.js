const counter = document.querySelector(".counter");
const frontBar = document.querySelector(".loading-bar-front");

let index = 0;

updateNum();

function updateNum() {
  counter.innerText = `${index}%`;
  frontBar.style.width = `${index}%`;
  index++;
  if (index < 101) {
    setTimeout(updateNum, 20);
  }
}

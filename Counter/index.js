const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

/*const btnPlus = document.querySelector(".btn-success");
const btnMinus = document.querySelector(".btn-danger");
const btnReset = document.querySelector(".btn-secondary");*/

let num = 0;
/*btnPlus.addEventListener("click", () => {
  value.textContent = ++num;
  if (num > 0) value.style.color = "green";
});

btnMinus.addEventListener("click", () => {
  value.textContent = --num;
  if (num < 0) value.style.color = "red";
});

btnReset.addEventListener("click", () => {
  value.textContent = 0;
  num = 0;
  if (num === 0) value.style.color = "black";
});*/

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    console.log(styles);
    if (styles.contains("btn-danger")) {
      num--;
    } else if (styles.contains("btn-success")) {
      num++;
    } else {
      num = 0;
    }
    value.textContent = num;

    if (num > 0) {
      value.style.color = "green";
    } else if (num < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});

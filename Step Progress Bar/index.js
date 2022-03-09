const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepsEl = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front");
let currentChecked = 1;

nextEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsEl.length) {
    currentChecked = stepsEl.length;
  }
  updateStep();
});

prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStep();
});

function updateStep() {
  stepsEl.forEach((step, index) => {
    if (index < currentChecked) {
      step.classList.add("checked");
      step.innerHTML = `
      <i class="fa-solid fa-check"></i>
      <small>${
        index === 0
          ? "start"
          : index === stepsEl.length - 1
          ? "Final"
          : "Step " + index
      }</small>
      `;
    } else {
      step.classList.remove("checked");
      step.innerHTML = `
      <i class="fa-solid fa-xmark"></i>
      `;
    }
  });

  const checkNum = document.querySelectorAll(".checked");

  progressEl.style.width =
    ((checkNum.length - 1) / (stepsEl.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prevEl.disabled = true;
  } else if (currentChecked === stepsEl.length) {
    nextEl.disabled = true;
  } else {
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}

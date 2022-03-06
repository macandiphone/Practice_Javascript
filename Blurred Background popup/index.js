const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");
const iconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

iconEl.addEventListener("click", () => {
  popupContainerEl.classList.add("active");
  containerEl.classList.remove("active");
});

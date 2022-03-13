const menu = document.querySelector(".menu");
const bar = document.querySelector(".fa-bars");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

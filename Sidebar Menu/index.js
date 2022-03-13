const close = document.querySelector(".fa-xmark");
const bar = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");

bar.addEventListener("click", (e) => {
  sidebar.classList.toggle("show-sidebar");
});

close.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

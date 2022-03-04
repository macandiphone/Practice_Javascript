const starsEl = document.querySelectorAll(".fa-star");
const emojiEl = document.querySelectorAll(".far");
const colorsArr = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(4);

starsEl.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  starsEl.forEach((star, i) => {
    if (i < index + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
  emojiEl.forEach((emo) => {
    emo.style.transform = `translateX(-${index * 50}px)`;
    emo.style.color = colorsArr[index];
  });
}

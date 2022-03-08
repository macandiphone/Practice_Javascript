const containerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  addImg();
});

function addImg() {
  let imgNum = 8;
  for (let i = 0; i < imgNum; i++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    containerEl.appendChild(newImg);
  }
}

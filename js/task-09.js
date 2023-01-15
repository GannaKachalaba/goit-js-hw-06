const changeColorBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  const randomColorChange = getRandomHexColor();
  body.style.backgroundColor = randomColorChange;
  textColor.textContent = randomColorChange;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


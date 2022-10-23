/*Selecting*/
const btn = document.querySelector("button");
const colorName = document.querySelector("span");

// generate color code

function getRandomColorCode() {
  return Math.floor(Math.random() * 255);
}

btn.addEventListener("click", function () {
  // list to hold the 3 different color values
  let selectedColor = [];
  selectedColor[0] = getRandomColorCode();
  selectedColor[1] = getRandomColorCode();
  selectedColor[2] = getRandomColorCode();

  // construct the rgb function
  let colorFormat = `rgb(${selectedColor[0]} , ${selectedColor[1]} , ${selectedColor[2]})`;

  // applying
  document.body.style.backgroundColor = colorFormat;
  colorName.innerText = colorFormat;
  colorName.style.color = colorFormat;
});

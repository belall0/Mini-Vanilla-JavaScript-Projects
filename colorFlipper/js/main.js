/*Selecting*/
const btn = document.querySelector("button");
const colorName = document.querySelector("span");

// color list
const colorList = [
  "red",
  "green",
  "dodgerblue",
  "pink",
  "deeppink",
  "tomato",
  "brown",
  "azure",
  "ivory",
  "teal",
  "silver",
];

let counter = 0;
btn.addEventListener("click", function () {
  let colorIndex = counter % colorList.length;
  let selectedColor = colorList[colorIndex];

  document.body.style.backgroundColor = selectedColor;
  colorName.innerText = selectedColor;
  colorName.style.color = selectedColor;

  counter++;
});

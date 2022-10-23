const btns = document.querySelector(".btns");
const result = document.querySelector("p");

btns.addEventListener("click", function (event) {
  const operation = event.target.id;
  let value = parseInt(result.innerText);

  // apply operation to the value
  if (operation === "++") {
    value++;
  } else if (operation === "--") {
    value--;
  } else {
    value = 0;
  }
  result.innerText = value;

  // change the color
  if (value > 0) {
    result.style.color = "green";
  } else if (value === 0) {
    result.style.color = "black";
  } else {
    result.style.color = "red";
  }
});

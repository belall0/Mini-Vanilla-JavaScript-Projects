const imgList = document.querySelectorAll(".image");
const btns = document.querySelector(".btns");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentImage = 0;

function prevBtnHandler() {
  // change the image
  currentImage--;
  imgList[currentImage].classList.add("active");

  // check if first image
  if (currentImage === 0) {
    prevBtn.disabled = true;
  }

  nextBtn.disabled = false;
}

function nextBtnHandler() {
  // change the image
  currentImage++;
  imgList[currentImage].classList.add("active");

  // check if last image
  if (currentImage + 1 === imgList.length) {
    nextBtn.disabled = true;
  }

  prevBtn.disabled = false;
}

function main() {
  // add listener to btns container and use event delegation
  btns.addEventListener("click", function (event) {
    let action = event.target.innerText;
    // remove the current image

    if (action === "Next") {
      imgList[currentImage].classList.remove("active");

      nextBtnHandler();
    } else if (action === "Prev") {
      imgList[currentImage].classList.remove("active");

      prevBtnHandler();
    }
  });
}

main();

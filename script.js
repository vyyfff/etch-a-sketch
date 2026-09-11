"use strict";

const container = document.querySelector(".container");
const boxCount = 256;

const htmlString = Array(boxCount)
  .fill()
  .map((_, i) => `<div class="my-box" data-id="${i + 1}"></div>`)
  .join("");

container.insertAdjacentHTML("beforeend", htmlString);

container.addEventListener("mouseover", (event) => {
  const box = event.target.closest(".my-box");

  if (box && container.contains(box)) {
    box.style.backgroundColor = "black";
  }
});

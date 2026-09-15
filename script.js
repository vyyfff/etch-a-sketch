"use strict";

const container = document.querySelector(".container");
const sizeButton = document.querySelector("#size-btn");
const clearButton = document.querySelector("#clear-button");
let gridSize = 16;
let gridFlexBasis = 0;

function addGrid() {
  const htmlString = Array(gridSize ** 2)
    .fill()
    .map((_, i) => `<div class="my-box" data-id="${i + 1}"></div>`)
    .join("");

  container.insertAdjacentHTML("beforeend", htmlString);
}

function changeGridSize(newGridSize) {
  while (true) {
    newGridSize = prompt("Enter new size of the grid (1 - 100)");

    if (newGridSize == null) {
      return;
    } else if (+newGridSize > 0 && +newGridSize <= 100) {
      break;
    } else {
      alert("Incorrect value. Try again");
    }
  }
  gridSize = newGridSize;

  container.innerHTML = "";
  addGrid(gridSize);

  gridFlexBasis = 100 / gridSize;
  document.documentElement.style.setProperty(
    "--grid-flex-basis",
    `${gridFlexBasis}%`,
  );
}

function randomColor() {
  let array = Array(3)
    .fill()
    .map((_, i) => Math.floor(Math.random() * 256))
    .join(", ");
  return array;
}

container.addEventListener("mouseover", (event) => {
  const box = event.target.closest(".my-box");

  if (box && container.contains(box)) {
    box.style.backgroundColor = `rgb(${randomColor()})`;
  }
});

sizeButton.addEventListener("click", () => {
  changeGridSize();
});

clearButton.addEventListener("click", () => {
  container.innerHTML = "";
  addGrid(gridSize);
});

addGrid(gridSize);

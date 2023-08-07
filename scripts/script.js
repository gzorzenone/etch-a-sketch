function createGrid(gridSize) {
  if(gridSize > 100) {
    alert("ERROR: The max number of squares per side of the new grid is 100.");
    return;
  }

  container.replaceChildren();

  for(let i = 0; i < gridSize ** 2; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("style", "width: calc(1% / " + gridSize + " * 100);");
    container.appendChild(content);
  }
}

const createNewGrid = document.querySelector("#create-new-grid");
const container = document.querySelector(".container");

createGrid(16);

createNewGrid.addEventListener("click", () => {
  createGrid(Number(prompt("Enter the number of squares per side of the new grid (max of 100):")));
});

container.addEventListener("mouseover", (e) => {
  if(e.target.classList.contains("content")) {
    e.target.classList.add("mouseover");
  }
});

container.addEventListener("mouseout", (e) => {
  if(e.target.classList.contains("content")) {
    e.target.classList.add("mouseout");
  }
});
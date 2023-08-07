function createGrid(gridSize) {
  const container = document.querySelector(".container");

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

createNewGrid.addEventListener("click", () => {
  createGrid(Number(prompt("Enter the number of squares per side of the new grid (max of 100):")));
});

createGrid(16);
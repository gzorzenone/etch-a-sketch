function createGrid(gridSize) {
  const container = document.querySelector(".container");

  for(let i = 0; i < gridSize ** 2; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("style", "width: calc(1% / " + gridSize + " * 100);");
    container.appendChild(content);
  }
}

createGrid(16);
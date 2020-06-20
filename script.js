const grid = document.querySelector(".grid");
const input = document.getElementById("quantity");
const reset = document.querySelector(".newGrid");

createGrid = () => {
  for (let i = 0; i <256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${input.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${input.value}, 2fr)`
  );
  for(let i = 0; i < input.value * input.value; i++){
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
console.log(input.value);
};

const square = document.querySelector(".grid");
square.addEventListener("mouseover", function (draw){
  draw.target.style.background ="rgb(54, 209, 176)";
});

input.addEventListener("change", updateGrid);

reset.addEventListener("click", function() {
  grid.innerHTML = "";
  input.value = "";
  grid.style.setProperty("grid-template-columns", 'repeat(16, 2fr)');
  grid.style.setProperty("grid-template-rows", 'repeat(16, 2fr)');
  createGrid();
});

createGrid();

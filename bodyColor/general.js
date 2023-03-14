"use strict";

const div = document.createElement("div");
document.body.appendChild(div);

const input = document.createElement("input");
div.appendChild(input);
input.placeholder = "Enter Color";

const button = document.createElement("button");
div.appendChild(button);
button.textContent = "Change Color";

button.addEventListener("click", () => {
  let valueInput = input.value;
  if (
    valueInput === "red" ||
    valueInput === "blue" ||
    valueInput === "green" ||
    valueInput === "black" ||
    valueInput === "white"
  ) {
    document.body.style.backgroundColor = valueInput;
  } else alert("Please Enter right color!");
});

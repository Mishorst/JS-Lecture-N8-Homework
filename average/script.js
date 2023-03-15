"use strict";

const div = document.createElement("div");
document.body.appendChild(div);

const input = document.createElement("input");
div.appendChild(input);
input.placeholder = "Enter your numbers";

const button = document.createElement("button");
div.appendChild(button);
button.textContent = "Average";

button.addEventListener("click", () => {
  let sum = 0;
  let aver;
  let valueInput = input.value;
  const arr = valueInput.split(":");

  for (const el of arr) {
    sum += Number(el);
  }

  aver = sum / arr.length;
  console.log(aver);
});

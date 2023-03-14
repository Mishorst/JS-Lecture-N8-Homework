"use strict";

const modal = document.createElement("div");
document.body.appendChild(modal);

const button = document.createElement("button");
button.textContent = "Open new Modal";
document.body.appendChild(button);

button.addEventListener("click", () => {
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.5)";

  button.style.opacity = 0;
});

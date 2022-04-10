let numContainer = document.getElementById("num");
let value = 0;
let btnInc = document.getElementById("inc")
let btnDec = document.getElementById("dec");
let btnReset = document.getElementById("reset");

btnInc.addEventListener("click", () => {
  value++;
  numContainer.textContent = value;
});

btnDec.addEventListener("click", () => {
  value--;
  numContainer.textContent = value;
});
btnReset.addEventListener("click", () => {
  value = 0;
  numContainer.textContent = value;
});
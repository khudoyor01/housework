let firstNumber = document.querySelector(".first");
let secondNumber = document.querySelector(".second");

let btn = document.querySelector(".btn");
let text = document.querySelector(".text");
btn.addEventListener("click", () => {
  if (firstNumber.value > secondNumber.value) {
    console.log(firstNumber.value / secondNumber.value);
  } else if (firstNumber.value < secondNumber.value) {
    text.innerHTML = secondNumber.value * firstNumber.value;
  } else {
    text.innerHTML = `sonlaringgiz bir xil ekan`;
  }
});



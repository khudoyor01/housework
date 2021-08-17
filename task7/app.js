// let itemsArray = ["Home", "Contact", "Services", "Portfolio"];

// let menu = document.querySelector(".menu");

// itemsArray.forEach(function (item) {
//   let li = document.createElement("li");
//   li.textContent = item;
//   menu.appendChild(li);
// });

// let items = document.querySelectorAll("li");
// console.log(items);
// items.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     items.forEach(function (el) {
//       el.className = "";
//     });
//     item.className = "active";
//   });
// });

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

// O'rta arifmetik

let numberArr = [1, 2, 3, 4];
function myFunc(Arr) {
  let count = 0;
  let total = 0;
  Arr.forEach(function (e) {
    total += e;
    count++;
  });
  console.log(total / count);
}
myFunc(numberArr);

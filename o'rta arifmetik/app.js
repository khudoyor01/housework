// palindrom numbers

const number = prompt("Son yoki so'z kiriting");

function palinDrom() {
  const numSplit = number.split("");
  const numReverse = numSplit.reverse();
  const numJoin = numReverse.join("");
  if (number == numJoin) {
    alert("Palindrom");
  } else {
    alert("Palindrom emas");
  }
}
palinDrom();


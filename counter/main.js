// let minus = document.getElementById("minus");
// let plus = document.getElementById("plus");
// let number = document.getElementById("number");
// let value = parseInt(number.value);

// function decrease() {
//   if (value > 0) {
//     value--;
//     number.value = value;
//   } else {
//     value = value;
//     number.value = value;
//   }
// }

// function increase() {
//   value++;
//   number.value = value;
// }

// minus.addEventListener("click", decrease);
// plus.addEventListener("click", increase);

const counter = document.getElementById("counter");

counter.addEventListener("click", (event) => {
  console.log(event.target);
  const button = event.target;
  const action = button.dataset.action;
  const input = counter.querySelector("input");
  let value = parseInt(input.value);

  if (action === "decrease") {
    value = Math.max(0, value - 1);
  } else if (action === "increase") {
    value++;
  }

  input.value = value;
});

// Data Attribute

let link = document.querySelectorAll(".links").forEach(function (event) {
  link.addEventListener("click", function () {
    console.log(this);
  });
});

console.log("sum is ${sum}");
const sumBtn = document.getElementById("add-btn");
sumBtn.addEventListener("click", () => {
  const num1 = document.getElementById("first-number").value;
  const num2 = document.getElementById("second-number").value;
  const sum = Number(num1) + Number(num2);
  const outputDiv = document.getElementById("total");
  outputDiv.innerText = sum;
});

const counterDiv = document.getElementById("counter");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
let counter = 0;
incrementBtn.addEventListener("click", () => {
  counter++;
  counterDiv.innerText = counter;
});

const menu = document.getElementById("menu-list");
menu.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("menu-item")) {
    console.log("event.target", event.target);
    let current = document.querySelector(".active");
    if (current) {
      current.classList.toggle("active");
    }
    event.target.classList.toggle("active");
  }
});

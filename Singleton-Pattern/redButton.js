import singetonCounter from "./singeltonPattern.js";
const redButton = document.getElementById("red");
redButton.addEventListener("click", () => {
  singetonCounter.increment();
  console.log(singetonCounter.getCount());
});

export default redButton;

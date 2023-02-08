import singetonCounter from "./singeltonPattern.js";
const blueButton = document.getElementById("blue");
blueButton.addEventListener("click", () => {
  singetonCounter.increment();
  console.log(singetonCounter.getCount());
});

export default blueButton;

const resetBtn = document.querySelector(".reset-button");
const moneyInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const customTip = document.querySelector(".custom-input");
const tipDisplay = document.querySelector(".calculated-amount");
const totalDisplay = document.querySelector(".calculated-display");
const tips = document.querySelectorAll(".tip");

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    tips.forEach((item) => item.classList.remove("active"));
    tip.classList.add("active");
  });
});

const resetBtn = document.querySelector(".reset-button");
const moneyInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const customTip = document.querySelector(".custom-input");
const tipDisplay = document.querySelector(".calculated-amount");
const totalDisplay = document.querySelector(".calculated-display");
const tips = document.querySelectorAll(".tip");
const moneyError = document.querySelector(".money-error");
const peopleError = document.querySelector(".people-error");

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    tips.forEach((item) => item.classList.remove("active"));
    tip.classList.add("active");
    calculateTip();
  });
});

//Money input

moneyInput.addEventListener("input", () => {
  let inputValue = moneyInput.value;

  inputValue = inputValue.replace(/\s/g, "");
  inputValue = inputValue.replace(",", ".");

  if (/^\d+(\.\d{0,2})?$/.test(inputValue)) {
    moneyInput.value = inputValue;
    moneyError.style.opacity = 0;
  } else {
    moneyError.style.opacity = 1;
  }
  calculateTip();
});

//people input

peopleInput.addEventListener("input", () => {
  let guestsInput = peopleInput.value;

  if (guestsInput <= 0 || isNaN(guestsInput)) {
    peopleError.style.opacity = 1;
  } else {
    peopleError.style.opacity = 0;
  }
  calculateTip();
});

//calculate tip

customTip.addEventListener("input", () => {
  calculateTip();
});

// Obliczanie napiwku
const calculateTip = () => {
  let inputValue = parseFloat(moneyInput.value);
  let guestsInput = parseFloat(peopleInput.value);
  let customTipValue = parseFloat(customTip.value);

  if (
    !isNaN(inputValue) &&
    inputValue > 0 &&
    !isNaN(guestsInput) &&
    guestsInput > 0
  ) {
    let tipAmount = 0;

    if (customTipValue > 0) {
      tipAmount = (inputValue * customTipValue) / 100;
    } else {
      tips.forEach((tip) => {
        if (tip.classList.contains("active")) {
          tipAmount = (inputValue * parseFloat(tip.textContent)) / 100;
        }
      });
    }

    let total = (inputValue + tipAmount) / guestsInput;

    tipDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalDisplay.textContent = `$${total.toFixed(2)}`;
  } else {
    tipDisplay.textContent = "$0.00";
    totalDisplay.textContent = "$0.00";
  }
};

// Reset Fields

resetBtn.addEventListener("click", () => {
  moneyInput.value = "";
  peopleInput.value = "";
  customTip.value = "";
  tipDisplay.textContent = "$0.00";
  totalDisplay.textContent = "$0.00";
});

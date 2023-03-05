const buttonEl = document.getElementById("button");
const spanEl = document.getElementById("span");

returnButton();

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick() {
  const isActive = buttonEl.classList.contains("userCard__button--active");

  if (!isActive) {
    buttonEl.innerText = "following";
    localStorage.setItem("Button", "following");
    buttonEl.classList.remove("userCard__button");
    buttonEl.classList.add("userCard__button--active");
    spanEl.textContent = Number(spanEl.textContent) + 1;
  } else {
    buttonEl.innerText = "follow";
    localStorage.setItem("Button", "follow");
    buttonEl.classList.remove("userCard__button--active");
    buttonEl.classList.add("userCard__button");
    spanEl.textContent = Number(spanEl.textContent) - 1;
  }
}

function returnButton() {
  const buttonMessage = localStorage.getItem("Button");

  if (buttonMessage) {
    buttonEl.innerText = buttonMessage;
  }

  if (buttonMessage === "follow") {
    buttonEl.classList.add("userCard__button");
  } else {
    buttonEl.classList.add("userCard__button--active");
    spanEl.textContent = Number(spanEl.textContent) + 1;
  }
}

function changeNumberFormat(number) {
  const numberFormat = new Intl.NumberFormat("en-GB");
  const formatFollowers = numberFormat.format(number);
  return formatFollowers;
}

function reChangeNumberFormat(number) {
  const numberFormat = new Intl.NumberFormat();
  const reFormatFollowers = numberFormat.format(number);
  return reFormatFollowers;
}

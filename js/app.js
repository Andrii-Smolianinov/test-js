const buttonEl = document.getElementById("button");
const spanEl = document.getElementById("span");

const onButtonClick = () => {
  buttonEl.classList.toggle("userCard__button--active");
  const isActive = buttonEl.classList.contains("userCard__button--active");

  if (!isActive) {
    spanEl.textContent = Number(spanEl.textContent) - 1;
    buttonEl.innerText = "follow";
  } else {
    spanEl.textContent = Number(spanEl.textContent) + 1;
    buttonEl.innerText = "following";
  }
};

buttonEl.addEventListener("click", onButtonClick);


// const re = /\B(?=(\d{3})+(?!\d))/g;
// const followers = spanEl.textContent;
// const replaceFollowers = followers.replace(re, ",");

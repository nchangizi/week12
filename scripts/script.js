const clickMeButton = document.querySelector(".click-me");

function handleClickMeButton() {
  alert("You Clicked!");
  // clickMeButton.removeEventListener("click", handleClickMeButton);
}

clickMeButton.addEventListener("click", handleClickMeButton);

function changeBGColor() {
  // document.body.style.backgroundColor = "pink";
  document.body.classList.add("pink");
}
clickMeButton.addEventListener("click", changeBGColor);

function changeText() {
  if (clickMeButton.textContent === "Click Me!") {
    clickMeButton.textContent = "Clicked";
  }
  else if (clickMeButton.textContent === "Clicked")
  {
    clickMeButton.textContent = "Click Me!";

  }
}

clickMeButton.addEventListener("click", changeText);

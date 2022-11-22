const clickMeButton = document.querySelector(".click-me");

function handleClickMeButton(event) {
//   console.log(event.target);
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
  } else if (clickMeButton.textContent === "Clicked") {
    clickMeButton.textContent = "Click Me!";
  }
}

clickMeButton.addEventListener("click", changeText);

function createAddButton() {
  const purpleButton = document.createElement("button");
  purpleButton.textContent = "Purple";
  purpleButton.addEventListener("mouseover", changeBGGreen);
  document.body.appendChild(purpleButton);
}
clickMeButton.addEventListener("click", createAddButton);
function createAddPara() {
  const para = document.createElement("p");
  para.textContent = "My para";
  para.addEventListener("mouseover", changeBGGreen);
  document.body.appendChild(para);
}
clickMeButton.addEventListener("click", createAddPara);

function changeBGGreen(event) {
  console.log(event.target);
  event.target.classList.add("green-background")
}


const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener("mouseover", changeBGGreen);

buttonContainer.addEventListener("click", changeParaToColor);

function changeParaToColor(event)
{
  event.target.style.color = event.target.textContent;
}
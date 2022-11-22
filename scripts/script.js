const clickMeButton = document.querySelector(".click-me");

function handleClickMeButton ()
{
    alert("You Clicked!");
}

clickMeButton.addEventListener("click", handleClickMeButton);
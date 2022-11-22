const clickMeButton = document.querySelector(".click-me");

function handleClickMeButton ()
{
    alert("You Clicked!");
    // clickMeButton.removeEventListener("click", handleClickMeButton);
}

clickMeButton.addEventListener("click", handleClickMeButton, {once:true});


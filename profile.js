// functionality for buttons

const getColor = document.querySelector("#color");
const getPlace = document.querySelector("#place");
const getRitual = document.querySelector("#ritual");

function handleColor() {
  alert("my favorite color is orange");
}
function handlePlace() {
  alert("my favorite place is Vanuatu");
}
function handleRitual() {
  alert(
    "my ritual is watching the entire starwars franchise the week before christmas"
  );
}

getColor.addEventListener("click", handleColor);
getPlace.addEventListener("click", handlePlace);
getRitual.addEventListener("click", handleRitual);

//functionality for form I put in
const getButton = document.querySelector(".profile-button");
const getYes = document.querySelector("#yes");
const getYesLabel = document.querySelector(".yes-label");
const getNo = document.querySelector("#no");

// trying to remove yes so the value of getYes will be no
function toggleYes() {
  getYes.remove();
  getYesLabel.remove();
}

getNo.addEventListener("click", toggleYes);

function handleButton(event) {
  event.preventDefault();

  if (getNo.value === "no") {
    alert("what");
  } else if (getYes.value === "yes") {
    alert("good choice");
  }
}
document.querySelector("form").addEventListener("submit", handleButton);

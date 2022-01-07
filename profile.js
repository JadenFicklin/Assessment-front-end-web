console.log("hello world");

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

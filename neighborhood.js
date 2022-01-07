let array = [
  "mcdonalds",
  "5-guys",
  "tona sushi bar and grill",
  "wendys",
  "starbucks",
  "taco bell",
  "burger king",
];
var randomIndex = Math.floor(Math.random() * array.length);
var randomElement = array[randomIndex];

const getButton = document.querySelector(".pick-button");

function randomRestaurant() {
  for (let i = 0; i < array.length; i++) {
    return alert(
      randomElement +
        "!    refresh page and click me again for new randome restaurant!"
    );
  }
}

getButton.addEventListener("click", randomRestaurant);

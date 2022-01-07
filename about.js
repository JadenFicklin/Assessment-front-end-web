console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  //   console.log("form submit");
  alert("the form has been submitted successfully");
}
function handleImage(evt) {
  evt.preventDefault();
  alert("you're cool");
}
let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);
let catImage = document.querySelector("#cat-image");
catImage.addEventListener("mouseover", handleImage);

TARGET_WORD = "chair"; // Target word for the game

// Run submitWord function every time the form is submitted
const form = document.getElementById("submit-word-form");
form.addEventListener("submit", submitWord);

function submitWord(event) {
  // Stop devault form submit event to prevent reloading the page
  event.preventDefault();

  // Get word string from text input
  var word = event.target[0].value;

  // Create a h1 element and this to the list of words
  var wordElement = document.createElement("h1");
  wordElement.innerHTML = word;
  var wordBox = document.getElementById("word-box");
  wordBox.appendChild(wordElement);

  // Check if the word is correct
  if (word === TARGET_WORD) {
    console.log("you win");
  } else {
    console.log("try again");
  }
}

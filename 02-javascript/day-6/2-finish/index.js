// Submit button element
const submitButton = document.querySelector("#submit");

// Submit event handler
function onSubmitClick(event) {
  event.preventDefault();

  // Get the input element's value and create a card
  const input = document.querySelector("#comments");
  const text = input.value;
  createCard(text);

  // Clear the input value for the next comment
  input.value = "";

  // Scroll down after card is appended to DOM
  const body = document.querySelector("body");
  window.scrollTo(0, body.scrollHeight, {
    behavior: "smooth",
  });
}

// Submit event listener
submitButton.addEventListener("click", onSubmitClick);

// Create a card element and append to DOM
function createCard(text) {
  // Create elements
  const card = document.createElement("div");
  card.className = "card";
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const comment = document.createElement("p");
  comment.innerText = text;

  // Assemble elements into a card
  cardBody.appendChild(comment);
  card.appendChild(cardBody);

  // Append card to DOM
  const commentCards = document.querySelector("#comment-cards");
  commentCards.appendChild(card);
}

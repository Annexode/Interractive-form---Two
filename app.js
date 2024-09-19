const review = document.querySelector("[data-js-form]");
const section = document.querySelector("[data-js-section]");
const container = document.querySelector("[data-js-container]");
function handleSubmit(event) {
  event.preventDefault();

  const rating = new FormData(event.target).get("rating");

  if (rating){
container.innerHTML = section.innerHTML.replace(/{{ rating }}/, rating);
  }
}
review.addEventListener("submit", handleSubmit);



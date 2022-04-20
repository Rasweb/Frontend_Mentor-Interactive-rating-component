// Submit button
const submitBtn = document.getElementById("submit");

// Number buttons
const ratingBtns = document.querySelectorAll(".btn");

// Rating variable
let rating;

// Adds a click function for the number buttons.
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating = btn.innerHTML;
  });
});

// Shows and hides the div and rating.
function showDiv() {
  document.getElementById("ratingDiv").style.display = "none";
  document.getElementById("thankYouDiv").style.display = "block";
  document.getElementById(
    "ratingDone"
  ).innerHTML = `You selected ${rating} out of 5`;
}

// Checks if rating is pressed(more than 0) and executes the showDiv function.
// Otherwise alert user.
submitBtn.addEventListener("click", () => {
  if (rating > 0) {
    showDiv();
  } else {
    alert("Please choose a rating.");
  }
});

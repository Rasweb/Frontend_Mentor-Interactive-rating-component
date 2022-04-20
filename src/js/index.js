const submitBtn = document.getElementById("submit");
const ratingBtns = document.querySelectorAll(".btn");
let rating;

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating = btn.innerHTML;
  });
});

function showDiv() {
  document.getElementById("ratingDiv").style.display = "none";
  document.getElementById("thankYouDiv").style.display = "block";
  const doneRating = (document.getElementById(
    "ratingDone"
  ).innerHTML = `You selected ${rating} out of 5`);
}

submitBtn.addEventListener("click", () => {
  if (rating > 0) {
    showDiv();
  } else {
    console.log("Bad");
  }
});

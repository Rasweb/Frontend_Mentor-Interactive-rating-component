window.onload = () => {
  document.getElementById("submit").addEventListener("click", showDiv);
};

function showDiv() {
  document.getElementById("ratingDiv").style.display = "none";
  document.getElementById("thankYouDiv").style.display = "block";
}

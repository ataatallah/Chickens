const heading = document.getElementById("heading");

heading.addEventListener("click", function () {
  if (heading.style.color === "red") {
    heading.style.color = "black";
  } else {
    heading.style.color = "red";
  }
});

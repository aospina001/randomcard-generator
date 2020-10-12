import "../style/index.css";

window.onload = function() {
  var numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var suits = ["&#9824;", "&#9827;", "&#9829;", "&#9830;"];

  function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  function getSuits() {
    return suits[Math.floor(Math.random() * suits.length)];
  }
  var mysuit = getSuits();

  if (mysuit == "&#9829;" || mysuit == "&#9830;") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  }

  document.querySelector(".top").innerHTML = mysuit;
  document.querySelector(".middle").innerHTML = getNumber();
  document.querySelector(".bottom").innerHTML = mysuit;
};

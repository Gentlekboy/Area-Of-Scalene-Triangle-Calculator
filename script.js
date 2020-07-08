
// TO GET VALUES
let firstSide = document.getElementById("firstSide");
let secondSide = document.getElementById("secondSide");
let thirdSide = document.getElementById("thirdSide");
let result = document.getElementById("result");
let button = document.getElementById("btn");

function calArea() {
  // APPLYING THE FORMULA
  let halfPerimeter = (firstSide.value + secondSide.value + thirdSide.value)/2;
  let area = Math.sqrt(halfPerimeter*(halfPerimeter - firstSide.value)*(halfPerimeter - secondSide.value)*(halfPerimeter - thirdSide.value));

  // TO MAKE SURE RESULT IS ROUNDED OFF
  function roundFig(number) {
    return Math.round(number * 100)/100;
  }

  result.innerHTML = "The Half Perimeter Of The Circle Is " + roundFig(halfPerimeter) + " And The Area Is " + roundFig(area) + " .";

  console.log(halfPerimeter);
  console.log(area);
  console.log(thirdSide.value);
  console.log(secondSide.value);
  console.log(firstSide.value);
}
button.addEventListener(onclick, calArea);
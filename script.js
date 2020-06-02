function calArea() {
  const firstSide = parseFloat(document.getElementById("firstSide").value);
  const secondSide = parseFloat(document.getElementById("secondSide").value);
  const thirdSide = parseFloat(document.getElementById("thirdSide").value);
  const result = document.getElementsByClassName("result");

  let halfPerimeter = (firstSide + secondSide + thirdSide)/2;

  let area = Math.sqrt(halfPerimeter*(halfPerimeter - firstSide)*(halfPerimeter - secondSide)*(halfPerimeter - thirdSide));

  let resultMessage = 'The area of the scalene triangle is ' + area;

  result.innerText = resultMessage;

  document.getElementById("btn").addEventListener("click", result.innerText);
}


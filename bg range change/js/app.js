let body = document.querySelector("body");
let itemRange = document.querySelectorAll(".item-range");
let colorRgb = document.querySelectorAll(".color-rgb span");
let copy = document.querySelector(".copy");

itemRange.forEach(function (item, index) {
  item.addEventListener("input", function () {
    let red = document.querySelector('.item-range[data-color="red"]').value;
    let green = document.querySelector('.item-range[data-color="green"]').value;
    let blue = document.querySelector('.item-range[data-color="blue"]').value;
    localStorage.setItem("red", red);
    localStorage.setItem("green", green);
    localStorage.setItem("blue", blue);
    body.style.backgroundColor = `rgb(${localStorage.getItem(
      "red"
    )},${localStorage.getItem("green")},${localStorage.getItem("blue")})`;
    colorRgb[0].textContent = localStorage.getItem("red");
    colorRgb[1].textContent = localStorage.getItem("green");
    colorRgb[2].textContent = localStorage.getItem("blue");
  });
});
window.addEventListener("load", function () {
  body.style.backgroundColor = `rgb(${localStorage.getItem(
    "red"
  )},${localStorage.getItem("green")},${localStorage.getItem("blue")})`;
  itemRange[0].value = localStorage.getItem("red");
  itemRange[1].value = localStorage.getItem("green");
  itemRange[2].value = localStorage.getItem("blue");
  colorRgb[0].textContent = localStorage.getItem("red");
  colorRgb[1].textContent = localStorage.getItem("green");
  colorRgb[2].textContent = localStorage.getItem("blue");
});
copy.addEventListener("click", function () {
  navigator.clipboard.writeText(body.style.backgroundColor);
});


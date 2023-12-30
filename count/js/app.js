let selectPlas = document.querySelector("#selectPlas");
let plas = document.querySelector(".plas");
let count = document.querySelector(".count");
let minus = document.querySelector(".minus");
let selectMinus = document.querySelector("#selectMinus");

// Saqlangan count qiymatini local storage'dan olish
let savedCount = localStorage.getItem("count");

if (savedCount == NaN || savedCount == null) {
  count.textContent = 0;
} else {
  count.textContent = savedCount;
}

let selectPlasLocal = localStorage.getItem("selectPlas");
if (selectPlasLocal == null || selectPlasLocal == NaN) {
  selectPlasLocal = 0;
} else {
  selectPlas.value = selectPlasLocal;
}

let selectMinusLocal = localStorage.getItem("selectMinus");
if (selectMinusLocal == null || selectMinusLocal == NaN) {
  selectMinusLocal = 0;
} else {
  selectMinus.value = selectMinusLocal;
}

plas.addEventListener("click", function () {
  count.textContent = 1 * count.textContent + 1 * selectPlas.value;
  localStorage.setItem("count", count.textContent);
  localStorage.setItem("selectPlas", selectPlas.value);
});

minus.addEventListener("click", function () {
  count.textContent = 1 * count.textContent - 1 * selectMinus.value;
  localStorage.setItem("count", count.textContent);
  localStorage.setItem("selectMinus", selectMinus.value);
});

const refs = {
  container: document.querySelector(".container"),
  input: document.querySelector("input"),
  btn: document.querySelector("button#btn"),
  btnGroupNum: document.querySelector(".btn-group-num"),
  btnGroupSign: document.querySelector(".btn-group-signs"),
  plusBtn: document.querySelector("button#plus"),
  minusBtn: document.querySelector("button#minus"),
  multiplyBtn: document.querySelector("button#multiply"),
  divideBtn: document.querySelector("button#divide"),
  equalBtn: document.querySelector("button#equal"),
  clearBtn: document.querySelector("button#clear"),
};

const numValue = {
  value: 0,
  changeValue(value) {
    return (this.value = value);
  },
};

refs.btnGroupNum.addEventListener("click", onClickShowInputValue);
// refs.input.addEventListener("input", inputValue);
refs.btnGroupSign.addEventListener("click", onClickToPlus);
refs.btnGroupSign.addEventListener("click", onClickToMinus);
refs.btnGroupSign.addEventListener("click", onClickToMultiply);
refs.btnGroupSign.addEventListener("click", onClickToDivide);
refs.equalBtn.addEventListener("click", onClickToEqual);
refs.clearBtn.addEventListener("click", onClickAllClear);

let numbersArr = [];
let reduceArr = [];
let total = 0;

function onClickShowInputValue(e) {
  if (e.currentTarget !== refs.btnGroupNum) {
    return;
  }

  let valueEl = Number(e.target.dataset.value);
  numValue.changeValue(valueEl);
  numbersArr.push(numValue.value);
  refs.input.value = numbersArr.join("");

  console.log(numbersArr.join("").split());
}

function onClickToPlus(e) {
  if (e.target !== refs.plusBtn) return;
  reduceArr.push(Number(numbersArr.join("")));
  console.log(plusFn(reduceArr));
  refs.input.value = plusFn(reduceArr);

  numbersArr = [];
}
function onClickToMinus(e) {
  if (e.target !== refs.minusBtn) return;
  reduceArr.push(Number(numbersArr.join("")));
  console.log(minusFn(reduceArr));
  refs.input.value = minusFn(reduceArr);

  numbersArr = [];
}
function onClickToMultiply(e) {
  if (e.target !== refs.multiplyBtn) return;
  reduceArr.push(Number(numbersArr.join("")));
  multiplyFn(reduceArr);
  refs.input.value = multiplyFn(reduceArr);

  numbersArr = [];
}

function onClickToDivide(e) {
  if (e.target !== refs.divideBtn) return;
  reduceArr.push(Number(numbersArr.join("")));
  divideFn(reduceArr);
  refs.input.value = divideFn(reduceArr);

  numbersArr = [];
}

function onClickToEqual(e) {
  if (e.target !== refs.equalBtn) return;
  reduceArr.push(Number(numbersArr.join("")));
}

function onClickAllClear(e) {
  if (e.target !== refs.clearBtn) return;
  refs.input.value = "";
  numbersArr = [];
  reduceArr = [];
}

function plusFn(arr) {
  return arr.reduce((a, b) => a + b);
}
function minusFn(arr) {
  return arr.reduce((a, b) => a - b);
}
function multiplyFn(arr) {
  return arr.reduce((a, b) => a * b);
}
function divideFn(arr) {
  return arr.reduce((a, b) => a / b);
}
// console.log(numValue.value);

// function onClickShowInputValue(e) {
//   if (e.currentTarget !== refs.btnGroupNum) {
//     return;
//   }
//   arrNumber.push(Number(e.target.dataset.value));
//   arr = Number(arrNumber.join("").split());
//   console.log(arr);
// }

// function onClickToPlus(e) {
//   if (e.target !== refs.plusBtn) return;
//   arrNumber = [];
//   a.push(arr);
//   console.log(a.flat().reduce((a, b) => a + b));
// }

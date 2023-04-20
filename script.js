const numberInput = document.getElementById("numberInput");

let expression = "";

function press(num) {
  expression += num;
  numberInput.value = expression;
}

function equals() {
  numberInput.value = eval(expression);
  expression = "";
}

function erase() {
  expression = "";
  numberInput.value = expression;
}

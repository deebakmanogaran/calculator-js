
let outputScreen = document.getElementById("output-screen");

function display(event) {
  outputScreen.value += event;
}

function clearInput() {
  outputScreen.value = "";
}

function deleteLast() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);  /* eval => used to evaluate the operations*/
  } catch (error) {
    outputScreen.value = "Error";
  }
}

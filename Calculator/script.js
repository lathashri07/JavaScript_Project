const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult(){
try {
    display.value = eval(display.value); //important: eval can execute any JavaScript code, so be cautious with its use 
}
catch(error) {
    display.value = "Error";
}
}

const counterLabel = document.getElementById("counterLabel");
const decrementButton = document.getElementById("decrementButton");
const resetButton = document.getElementById("resetButton");
const incrementButton = document.getElementById("incrementButton");
let count = 0;

incrementButton.onclick = function() {
    count++;
    counterLabel.textContent = count;
}

decrementButton.onclick = function() {
    count--;
    counterLabel.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    counterLabel.textContent = count;
}
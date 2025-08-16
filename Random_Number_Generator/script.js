const btn = document.getElementById("btn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
let randomNumber1;
let randomNumber2;
let randomNumber3;
let min = 1;
let max= 10;

btn.onclick = function() {
    randomNumber1 = Math.floor(Math.random() * max) + min; // Generate random number between min and max (it add +1 so max is inclusive)
    label1.textContent = randomNumber1;

    randomNumber2 = Math.floor(Math.random() * max) + min; // Generate random number between min and max
    label2.textContent = randomNumber2;

    randomNumber3 = Math.floor(Math.random() * (max - min)) + min; // Generate random number between min and max(exclusive)
    label3.textContent = randomNumber3;
}
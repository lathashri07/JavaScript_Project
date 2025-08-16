const noinput = document.getElementById("noinput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

let temp;

btn.onclick = function() {
    temp = Number(noinput.value);

    if(toFahrenheit.checked) {
        temp = (temp * 9/5) + 32; // Convert Celsius to Fahrenheit
        result.textContent = `Temperature in Fahrenheit: ${temp.toFixed(2)}°F`;
    }
    else if(toCelsius.checked) {
        temp = (temp - 32) * 5/9; // Convert Fahrenheit to Celsius
        result.textContent = `Temperature in Celsius: ${temp.toFixed(2)}°C`;
    }
    else {
        result.textContent = "Please select a unit.";
    }
}
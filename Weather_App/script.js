const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const wetherResult = document.querySelector('.wetherResult');
const apiKey = "ad279dac8c65d79602c10d67d4d295ee";

weatherForm.addEventListener("submit", async events => {
    events.preventDefault();

    const city = cityInput.value;
    if(city) {
        try {
            const weatherData = await fetchWeather(city);
            displayWeatherInfo(weatherData);
        } catch(error) {
            console.error(error);
            displayError(error.message);
        }

    } else {
        displayError("Please enter a city name.");
    }
});

async function fetchWeather(city) {
    const getUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(getUrl);
    
    if(!response.ok) {
        throw new Error("City not found or API error.");
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    const {name: city,
           main: {temp, humidity},
           weather: [{id, description}] } = data;

    wetherResult.textContent = "";
    wetherResult.style.display = "block";

    const cityName = document.createElement('p');
    const temperature = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('p');
    const emoji = document.createElement('p');

    cityName.textContent = `${city}`;
    temperature.textContent = `${(temp - 273.15).toFixed(2)} °C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descriptionDisplay.textContent = `${description}`;
    emoji.textContent = `${displayEmoji(id)}`;

    cityName.classList.add('cityName');
    temperature.classList.add('temperature');
    humidityDisplay.classList.add('humidity');
    descriptionDisplay.classList.add('description');
    emoji.classList.add('emoji');

    wetherResult.appendChild(cityName);
    wetherResult.appendChild(temperature);
    wetherResult.appendChild(humidityDisplay);
    wetherResult.appendChild(descriptionDisplay);
    wetherResult.appendChild(emoji);
}

function displayEmoji(weatherId) {
    switch(true) {
        case (weatherId >= 200 && weatherId < 300):
            return "🌩️"; // Thunderstorm
        case (weatherId >= 300 && weatherId < 500):
            return "🌧️"; // Drizzle
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️"; // Rain
        case (weatherId >= 600 && weatherId < 700):
            return "❄️"; // Snow
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️"; // Atmosphere
        case (weatherId === 800):
            return "☀️"; // Clear
        case (weatherId > 800):
            return "☁️"; // Clouds
        default:
            return "❓"; // Unknown weather
    }
}

function displayError(message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.classList.add('errorMessage');

    wetherResult.textContent = "";
    wetherResult.style.display = "flex";
    wetherResult.appendChild(errorMessage);
}
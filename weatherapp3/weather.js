const apiKey = '858303e799e39182ae2a2ad9567829a8';

async function getWeatherData(cityName) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
    if (!response.ok) throw new Error("City not found !!!");
    return response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw error;
  }
}

function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const windSpeed = data.wind.speed;
  const pressure = data.main.pressure;

  const weatherElement = document.querySelector(".weather");
  weatherElement.innerHTML = `
    <h2 class="city">Weather in ${name}</h2>
    <p class="date">${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
    <p class="description">${description}</p>
    <img class="icon" src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" />
    <p class="temp">${temp}°C</p>
    <p class="humidity">Humidity: ${humidity}%</p>
    <p class="windspeed">Wind: ${windSpeed} km/h</p>
    <p class="pressure">Pressure: ${pressure} hPa</p>
  `;
}

function showError(errorMessage) {
  const weatherElement = document.querySelector(".weather");
  weatherElement.innerHTML = `<p class="error">${errorMessage}</p>`;
}

function search() {
  const cityName = document.querySelector(".search-bar").value.trim();
  if (cityName !== "") {
    const savedWeatherData = localStorage.getItem(cityName);
    if (savedWeatherData) {
      displayWeather(JSON.parse(savedWeatherData));
    } else {
      getWeatherData(cityName)
        .then(data => {
          displayWeather(data);
          localStorage.setItem(cityName, JSON.stringify(data));
        })
        .catch(error => {
          showError(error.message);
        });
    }
  } else {
    showError("Please enter a city name.");
  }
}

document.querySelector(".search button").addEventListener("click", search);

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    search();
  }
});

const defaultCity = "Damak";
const savedDefaultWeatherData = localStorage.getItem(defaultCity);
if (savedDefaultWeatherData) {
  displayWeather(JSON.parse(savedDefaultWeatherData));
} else {
  getWeatherData(defaultCity)
    .then(data => {
      displayWeather(data);
      localStorage.setItem(defaultCity, JSON.stringify(data));
    })
    .catch(error => console.error('Error fetching weather data:', error.message));
}

let now = new Date();
let h2 = document.querySelector("h2");
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let key = "908252f0ce90156474cc02b551639303";
  let city = `${searchInput.value}`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=908252f0ce90156474cc02b551639303`;

  axios.get(`${url}&appid=${key}`).then(showWeather);
}
let searchInput = document.querySelector("#search-text-input");
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showWeather(response) {
  console.log(response);
  let showTemperature = Math.round(response.data.main.temp);
  let showWind = response.data.wind.speed;
  let showVisibility = response.data.visibility;
  console.log(showVisibility);
  let temperatureElement = document.querySelector("#temperature-value");
  temperatureElement.innerHTML = ` The temperature is ${showTemperature}°C`;
  let divElement = document.querySelector("#visibility-value");
  divElement.innerHTML = ` The Visibility is ${showVisibility}`;
  let divElement2 = document.querySelector("#wind-value");
  divElement2.innerHTML = ` The wind-speed is ${showWind}`;
}

function showLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let key = "908252f0ce90156474cc02b551639303";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=908252f0ce90156474cc02b551639303`;

  axios.get(`${url}&appid=${key}`).then(showWeather);
}
function displayCurrent(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}
let currentButton = document.querySelector("#current-value");
currentButton.addEventListener("click", displayCurrent);

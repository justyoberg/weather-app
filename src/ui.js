import { getWeather, getForecast } from "./weather";
import sunny from "./imgs/sunny.jpg";
import snow from "./imgs/snow.jpg";
import rain from "./imgs/rain.jpg";
import cloudy from "./imgs/cloudy.jpg";

const body = document.querySelector("body");
const forecastImg = document.querySelector(".forecast-img");
const temperature = document.querySelector(".temp");
const city = document.querySelector(".city");
const forecast = document.querySelector(".forecast");

const search = document.getElementById("search");
const searchBtn = document.querySelector(".search-btn");
const switchTempBtn = document.querySelector(".temp-btn");

let celsius = false;
let currentObj;

searchBtn.addEventListener("click", () => getSearchData());

search.addEventListener("keyup", (event) => {

  if (event.key === "Enter") {
    getSearchData();
  }

});

switchTempBtn.addEventListener("click", (event) => {

  if (celsius == false) {
    celsius = true;
    event.target.textContent = "Fahrenheit";
  } else {
    celsius = false;
    event.target.textContent = "Celsius";
  }

  updatePage(currentObj);
})

export const updatePage = (weather) => {

  let forecastStr = getForecast(weather.forecast);

  forecastImg.src = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;

  if (celsius == false) temperature.textContent = `${weather.f}° F`;
  else temperature.textContent = `${weather.c}° C`;

  forecast.textContent = forecastStr;
  city.textContent = weather.name;

  if (forecastStr == "Drizzle" || 
      forecastStr == "Thunderstorm" || 
      forecastStr == "Rain") {
        body.style.backgroundImage = `url(${rain})`;
      } else if (forecastStr == "Snow" ) {
        body.style.backgroundImage = `url(${snow})`;
      } else if (forecastStr == "Clear") {
        body.style.backgroundImage = `url(${sunny})`;
      } else if (forecastStr == "Cloudy") {
        body.style.backgroundImage = `url(${cloudy})`;
      }

}

const getSearchData = async () => {

  if (!search.value) return;
  const weather = await getWeather(search.value);
  updateCurrentObj(weather);
  if (weather == null) search.classList.add("error");
  else {
    search.classList.remove("error");
    updatePage(weather)
  };

};

export const updateCurrentObj = (obj) => {
  currentObj = obj;
}
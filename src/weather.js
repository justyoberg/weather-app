const apiKey = "97c480bbc70f77b8b3995678d59993b6";

export async function getWeather(location) {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  try {
    const response = await fetch(url, {mode: "cors"});
    const data = await response.json();
    return getWeatherData(data);
  } catch(err) {
    return null
  }

};

const getWeatherData = (obj) => {

  return {
    name: obj.name,
    c: Math.round( (obj.main.temp - 273.15) ),
    f: Math.round( ((obj.main.temp - 273.15) * 1.8) + 32 ),
    icon: obj.weather[0].icon,
    forecast: obj.weather[0].id
  }

};

export const getForecast = (id) => {

  if (id >= 300 && id <= 321) return "Drizzle";
  if (id >= 200 && id <= 232) return "Thunderstorm";
  if (id >= 500 && id <= 531) return "Rain";
  if (id >= 600 && id <= 622) return "Snow";
  if (id == 800) return "Clear";
  if (id >= 801 && id <= 804) return "Cloudy";

};

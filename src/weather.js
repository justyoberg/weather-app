const apiKey = "97c480bbc70f77b8b3995678d59993b6";

export async function getWeather(location) {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  try {
    let response = await fetch(url);
    return response.json();
  } catch (err) {
    return err;
  }

}

import { updatePage, updateCurrentObj } from "./ui.js";
import { getWeather } from "./weather";
import "./styles.css"

async function initializePage() {

  const weather = await getWeather("New York");
  updateCurrentObj(weather);
  updatePage(weather);

}

initializePage();
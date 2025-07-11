import "./Input.css";
import { useWeather } from "../context/Weather";

function Input() {
  const Weather = useWeather();

  return (
    <input
      type="text"
      className="weather-input"
      value={Weather.searchCity || ""}
      onChange={(e) => Weather.setsearchCity(e.target.value)}
      placeholder="Enter city name"
    />
  );
}

export default Input;

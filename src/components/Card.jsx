import "./Card.css";
import { useWeather } from "../context/Weather";

function Card() {
  const Weather = useWeather();

  if (!Weather.data) return null;

  const { temp_c, condition, humidity, wind_kph } = Weather.data.current || {};
  const { name } = Weather.data.location || {};
  const iconUrl = condition?.icon ? `https:${condition.icon}` : "";

  return (
    <div>
      <div className="card">
        {iconUrl && <img src={iconUrl} alt="weather icon" />}
        <h2>{temp_c}°C</h2>
        <h5>{name}</h5>

        <div className="extra-info">
          <div>💧 Humidity: {humidity}%</div>
          <div>💨 Wind: {wind_kph} kph</div>
        </div>
      </div>
    </div>
  );
}

export default Card;

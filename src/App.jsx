import "./components/Card.css";
import "./components/Button.css";
import "./components/Input.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useEffect } from "react";
import { useWeather } from "./context/Weather";
import "./App.css";

function App() {
  const Weather = useWeather();

  useEffect(() => {
    Weather.fetchuser();
  }, []);

  return (
    <div className="app-container">
      <div className="search-bar">
        <Input />
        <Button onClick={Weather.fetchdata} value="Search" />
      </div>
      <Card />
    </div>
  );
}

export default App;

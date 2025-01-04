import { useState } from "react";
import SearchBox from "./SearchBox.jsx";  // Ensure correct case
import InfoBox from "./InfoBox.jsx";      // Ensure correct case

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 9.54,
        humidity: 93,
        temp: 10.05,
        tempMin: 10.05,
        tempMax: 10.05,  // Fixed typo here
        weather: "mist",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Hasmat</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />  {/* Ensure prop is passed correctly */}
        </div>
    );
}

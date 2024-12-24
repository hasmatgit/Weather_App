import { useState } from "react";
import SearchBox from "./Searchbox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 9.54,
        humidity: 93,
        temp: 10.05,
        tempMin: 10.05,
        temtMax: 10.05,
        weather: "mist",
    });

    let updateInfo =(newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Hasmat</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
            {/* <InfoBox info={weatherInfo}/> */}

        </div>
    );
}
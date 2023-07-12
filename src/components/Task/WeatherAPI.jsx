import React, { useEffect, useState } from "react";

const WeatherAPI = () => {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=-34.9215&longitude=-57.9545&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1";
  const [weather, setweather] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setweather(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div>
        {weather ? (
          <>
            <p style={{ color: "white" }}>
              <strong>Temp:</strong> Min: {weather.daily.temperature_2m_min}
              &deg;C / Max: {weather.daily.temperature_2m_max}
              &deg;C
            </p>
            <p style={{ color: "white" }}>
              <strong>GMT {weather.timezone_abbreviation}</strong>
            </p>
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </>
  );
};

export default WeatherAPI;

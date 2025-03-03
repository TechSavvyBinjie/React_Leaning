import { useState, useEffect } from "react";

const Weather = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Nanjing&appid=8a2e3c80f3d15d6973d51c0457dbe4da"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("网络请求错误");
        }
        return response.json();
      })
      .then((json) => {
        // Assuming the OpenWeather API response structure
        if (json && json.weather && json.main) {
          setData(json);
        } else {
          setError("获取数据失败");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>加载中</p>;

  return (
    <div>
      <p>城市: {data.name}</p>
      <p>天气: {data.weather[0].description}</p>
      <p>当天温度: {(data.main.temp - 273.15).toFixed(2)}°C</p>
      <p>天气湿度: {data.main.humidity}%</p>
    </div>
  );
};

export default Weather;

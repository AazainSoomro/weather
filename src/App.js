import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0b9a7c0059e7a44c3df1a3a47ef61b5f`;
  return (
    <div className="App">
      <div className="bg-[url('./Assets/bgimg.jpg')] bg-center text-white  h-screen bg-cover">
        <div className="h-screen w-screen bg-black/40">
          <div className="p-20 ">
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              id="city-input"
              className="bg-gray-800/40 border rounded-full  border-white focus:ring-orange-50 focus:ring-0 focus:border-white text-xl text-center px-6 py-2 m-2   placeholder:text-gray-200"
              placeholder="Enter City"
            />
          </div>
          <div className="lg:flex lg:space-x-40 justify-center ">
            <div className=" ">
              <div className="w-96 my-10 mb-40 mx-auto flex  rounded-xl py-4 ">
                <div className="flex-1 px-2">
                  <h1 className="text-2xl">{data.name}</h1>
                  <h1 className="text-8xl md:text-9xl font-bold ">
                    {data.main ? Math.round(data.main.temp - 271) : null}°C
                  </h1>
                </div>
                <h1 className="  text-2xl my-12 -rotate-90">
                  {data.weather ? data.weather[0].description : null}
                </h1>
              </div>
            </div>
            <div className=" pt-10  h-10">
              <div className="flex justify-center space-x-16 mb-12 mx-auto px-6 flex-nowrap">
                <div className="bg-gray-900/20 rounded-lg py-2 w-48">
                  <h1>Feels like</h1>
                  <h1 className="text-2xl font-bold">
                    {data.main ? Math.round(data.main.feels_like - 271) : null}
                    °C
                  </h1>
                </div>
                <div className="bg-gray-900/20 rounded-lg py-2 w-48">
                  <h1>Humidity</h1>
                  <h1 className="text-2xl font-bold">
                    {data.main ? data.main.humidity : null} g/m³
                  </h1>
                </div>
              </div>
              <div className="flex justify-center space-x-16  mx-auto px-6 flex-nowrap">
                <div className="bg-gray-900/20 rounded-lg py-2 w-48">
                  <h1>Pressure</h1>
                  <h1 className="text-2xl font-bold">
                    {data.main ? data.main.pressure : null} Pa
                  </h1>
                </div>
                <div className="bg-gray-900/20 rounded-lg py-2 w-48">
                  <h1>Wind speed</h1>
                  <h1 className="text-2xl font-bold">
                    {data.wind ? data.wind.speed : null} m/s
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

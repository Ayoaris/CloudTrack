import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Favourite from "../components/favourite";
import Navbar from "../components/navbar";
import Countries from "./countries";

// 15 list of largest cities in the world by population in alphabetical order

const cities = [
  "Abu Dhabi",
  "Amsterdam",
  "Athens",
  "Bangkok",
  "Barcelona",
  "Beijing",
  "Berlin",
  "Bogota",
  "Brussels",
  "Buenos Aires",
  "Cairo",
  "Cape Town",
  "Chicago",
  "Delhi",
  "Dhaka",
  "Dubai",
];

const url = `http://api.weatherstack.com/current`;

const Home = () => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchData = async () => {
    try {
      const data = cities.map(async (el) => {
        const res = await axios.get(url, {
          params: {
            query: el,
            access_key: "11a3ce213d31cff6a6f53cf5f91b1714",
            // units: "metric",
          },
        });
        return res.data;
      });

      const result = await Promise.all(data);

      setWeatherData(result);

      localStorage.setItem("weatherData", JSON.stringify(result));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteWeatherData = (id) => {
    const filtered = weatherData.filter((el) => el !== id);
    setWeatherData(filtered);
    localStorage.setItem("weatherData", JSON.stringify(filtered));
  };

  const handleSearch = async (e, search) => {
    if (e.key !== "Enter") return;
    try {
      const res = await axios.get(url, {
        params: {
          query: search,
          access_key: "11a3ce213d31cff6a6f53cf5f91b1714",
          // units: "metric",
        },
      });

      setWeatherData([res.data]);

      localStorage.setItem("weatherData", JSON.stringify([res.data]));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <Favourite />
      <Countries deleteWeatherData={deleteWeatherData} weather={weatherData} />
      <Footer />
    </div>
  );
};
export default Home;

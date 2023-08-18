import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cloudy from "../assets/cloudy.svg";
import overcast from "../assets/cloudy-day-3.svg";
import day from "../assets/day.svg";
import rainy from "../assets/rainy-4.svg";
import rainy2 from "../assets/rainy-1.svg";
import thunder from "../assets/thunder.svg";

const obj = {
  "Partly cloudy": cloudy,
  Clear: day,
  Sunny: day,
  Overcast: overcast,
  "Light drizzle": rainy,
  "Patchy rain possible": rainy2,
  "Rain With Thunderstorm, Mist": thunder,
};

const Countries = ({ weather, deleteWeatherData }) => {
  return (
    <div className="country-list">
      <h1>Cities</h1>

      {weather.length === 0 ? (
        <div className="empty">
          <p> Loading...</p>
        </div>
      ) : (
        weather &&
        weather.map((data, i) => (
          <div className="container" key={i}>
            <Link to={`/${i}`} className="links" key={i}>
              <div className="countries">
                <p>{data.location.name}</p>
                <div>
                  <p>{data.current.temperature}°C</p>
                </div>

                <div>
                  <div className="image-container">
                    <img src={obj[data.current.weather_descriptions]} alt="" />
                  </div>
                </div>

                {/* display svg  */}

                <div>
                  <p>{data?.current?.weather_descriptions}</p>
                </div>
              </div>
            </Link>
            <button className="remove" onClick={() => deleteWeatherData(data)}>
              {" "}
              -{" "}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

Countries.propTypes = {
  weather: PropTypes.array.isRequired,
  deleteWeatherData: PropTypes.func.isRequired,
};
export default Countries;

import { Link, useNavigate } from "react-router-dom";
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

const Favourite = ({ favoriteData, deleteFavoriteData }) => {
  return (
    <div className="fav-section">
      {favoriteData &&
        favoriteData.map((data, i) => (
          // console.log({ data }),
          <Link
            to={`/favorite-countryInfo/${data.id}`}
            className="link"
            key={i}
          >
            <div className="fav-card">
              <div className="top-card">
                <p>{data.location.name}</p>

                <div className="right-top">
                  <div className="image-container">
                    <img src={obj[data.current.weather_descriptions]} alt="" />
                  </div>
                  <div className="x-btn">
                    <button
                      onClick={() => deleteFavoriteData(data.id)}
                      className="edit"
                    >
                      {" "}
                      x{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="bottom-card">
                <div className="degree">{data.current.temperature}°C</div>
                <div className="details-wrapper">
                  <div className="details">
                    <span>Details</span>
                  </div>
                  <div className="details">
                    <span>Feels like</span>
                    <span>{data.current.feelslike}°C</span>
                  </div>
                  <div className="details">
                    <span>Wind</span>
                    <span>{data.current.wind_speed}mph</span>
                  </div>
                  <div className="details">
                    <span>Humidity</span>
                    <span>{data.current.humidity}g.m-3</span>
                  </div>
                  <div className="details">
                    <span>Pressure</span>
                    <span>{data.current.pressure}hps</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

Favourite.propTypes = {
  favoriteData: PropTypes.array.isRequired,
  // setFavoriteData: PropTypes.func,
  deleteFavoriteData: PropTypes.func.isRequired,
};
export default Favourite;

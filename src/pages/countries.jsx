import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Countries = ({ weather, deleteWeatherData }) => {
  return (
    <div className="country-list">
      <h1>Cities</h1>

      {weather.length === 0 ? (
        <div className="empty">
          <p> No city added</p>
        </div>
      ) : (
        weather.map((data, i) => (
          <div className="container" key={i}>
            <Link to={`/${i}`} className="links" key={i}>
              <div className="countries">
                <p>{data?.location?.name}</p>
                <div>
                  <p>{data?.current?.temperature}C</p>
                </div>
              </div>
            </Link>
            <button className="remove" onClick={() => deleteWeatherData(data)}>
              {" "}
              x{" "}
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

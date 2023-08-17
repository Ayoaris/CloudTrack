import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Countries = ({ weather }) => {
  // console.log({ weather });

  const removeFromList = (id) => {
    const newList = weather.filter((el, i) => i !== id);
    localStorage.setItem("weatherData", JSON.stringify(newList));
    window.location.reload();
  };
  return (
    <div className="country-list">
      <h1>Cities</h1>

      {weather.map((data, i) => (
        <Link to={`/${i}`} className="links" key={i}>
          <div className="countries">
            <p>{data.location.name}</p>
            <div>
              <p>{data.current.temperature}°C</p>
            </div>
            <button className="remove" onClick={removeFromList}>
              {" "}
              x{" "}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

Countries.propTypes = {
  weather: PropTypes.array.isRequired,
};
export default Countries;

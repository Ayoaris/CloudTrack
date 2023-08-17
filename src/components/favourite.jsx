import { Link } from "react-router-dom";

const Favourite = () => {
  const favoriteData = JSON.parse(localStorage.getItem("favoriteData")) || [];

  // console.log({ favoriteData });
  return (
    <div className="fav-section">
      {favoriteData.map(
        (data, i) => (
          console.log({ data }),
          (
            <Link to={`/favorite-countryInfo/${i}`} className="link" key={i}>
              <div className="fav-card">
                <div className="top-card">
                  <p>{data.location.name}</p>

                  <div className="right-top">
                    <p>{data.current.weather_descriptions}</p>
                    <div className="x-btn">
                      <button className="edit"> x </button>
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
          )
        )
      )}
    </div>
  );
};
export default Favourite;

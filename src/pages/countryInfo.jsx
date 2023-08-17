import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryInfo = () => {
  const [comment, setComment] = useState("");

  // const [data, setData] = useState({});

  const navigate = useNavigate();

  const weatherData = JSON.parse(localStorage.getItem("weatherData"));

  const favoriteData = JSON.parse(localStorage.getItem("favoriteData")) || [];

  const { id } = useParams();

  const getWeatherData = () => {
    return weatherData[id];
  };

  const data = getWeatherData();

  const routeBack = () => {
    navigate(-1);
  };

  const addFavourite = () => {
    if (!comment) {
      alert("Please add a comment");
      return;
    }

    const newFavourite = {
      comment,
      ...data,
    };

    const newFavoriteData = [...favoriteData, newFavourite];

    localStorage.setItem("favoriteData", JSON.stringify(newFavoriteData));

    alert("Added to favourite");

    navigate("/");
  };
  return (
    <div className="info-section">
      <div className="country-list">
        <h1>More Info</h1>
        <div className="countries">
          <p>{data.location.name}</p>
          <div>
            <p>{data.current.temperature}°C</p>
          </div>
        </div>
        <div className="more-details">
          <p className="info">City: {data.location.name}</p>
          <p className="info">Temperature: {data.current.temperature}°C</p>
          <p className="info">Wind Degree:{data.current.wind_degree}°C</p>
          <p className="info">Humidity: {data.current.humidity}°C</p>
          <p className="info">Pressure: {data.current.pressure}hps</p>
          <label htmlFor="note">Notes</label>
          <div className="notes">
            <p> I love this city</p>
            <div className=" note-btn">
              <button className="btn"> Edit</button>
              <button className="btn"> Delete</button>
            </div>
          </div>
          <label htmlFor="Comment"> Comment:</label>
          <div className="text">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              name="comment"
            />
          </div>
          <div className="info-btn">
            <button className="btn" onClick={routeBack}>
              Back
            </button>
            <button className="btn" onClick={addFavourite}>
              Add Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryInfo;

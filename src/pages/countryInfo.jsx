const CountryInfo = () => {
  return (
    <div className="info-section">
      <div className="country-list">
        <h1>More Info</h1>
        <div className="countries">
          <p>Abu Dahbi, AE</p>
          <div>
            <p>30C</p>
          </div>
        </div>
        <div className="more-details">
          <p className="info">City:</p>
          <p className="info">Temperature:</p>
          <p className="info">Wind:</p>
          <p className="info">Humidity:</p>
          <p className="info">Pressure:</p>
          <label htmlFor="Comment"> Comment:</label>
          <div className="text">
            <textarea />
          </div>
          <div className="info-btn">
            <button className="btn">Back</button>
            <button className="btn">Add Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryInfo;

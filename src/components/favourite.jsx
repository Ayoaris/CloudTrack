const Favourite = () => {
  return (
    <div className="fav-section">
      <div className="fav-card">
        <div className="top-card">
          <p>Abu Dahbi, AE</p>
          <p> ICON</p>
        </div>
        <div className="bottom-card">
          <div className="degree">40C</div>
          <div className="details-wrapper">
            <div className="details">
              <span>Details</span>
            </div>
            <div className="details">
              <span>Feels like</span>
              <span>44C</span>
            </div>
            <div className="details">
              <span>Wind</span>
              <span>5.66 m/s</span>
            </div>
            <div className="details">
              <span>Humidity</span>
              <span>31</span>
            </div>
            <div className="details">
              <span>Pressure</span>
              <span>990hps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Favourite;

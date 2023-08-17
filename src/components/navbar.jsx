import logo from "../assets/logo.png";
import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  // // const localStorageData = JSON.parse(localStorage.getItem("weatherData")) || [];

  return (
    <div className=" nav-section">
      <div className="nav-left">
        <img src={logo} alt="logo" />
        <p>ClimaTrack</p>
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => {
            // console.log(e.target.value);
            setSearch(e.target.value);
          }}
          placeholder="Search for Cities.."
          onKeyPress={(e) => handleSearch(e, search)}
        />
      </div>
      <div className="nav-right">
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default Navbar;

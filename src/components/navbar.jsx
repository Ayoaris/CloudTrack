import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className=" nav-section">
      <div className="nav-left">
        <img src={logo} alt="logo" />
        <p>ClimaTrack</p>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for Cities.." />
      </div>
      <div className="nav-right">
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};
export default Navbar;

import Footer from "../components/Footer";
import Favourite from "../components/favourite";
import Navbar from "../components/navbar";
import Countries from "./countries";
import CountryInfo from "./countryInfo";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Favourite />
      <Countries />
      <CountryInfo />
      {/* <Footer /> */}
    </div>
  );
};
export default Home;

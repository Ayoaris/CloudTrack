import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import CountryInfo from "./pages/countryInfo";
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<CountryInfo />} />
            <Route path="/favorite-countryInfo/:id" element={<CountryInfo />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

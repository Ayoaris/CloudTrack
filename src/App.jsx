import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CountryInfo from "./pages/countryInfo";
import Home from "./pages/Home";

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

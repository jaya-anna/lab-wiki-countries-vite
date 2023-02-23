import { useState } from "react";
import "./App.css";
import countries from "./countries.json";

import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  const [countriesState] = useState(countries);

  return (
    <div className="App">
      <Navbar />

      <CountriesList countries={countriesState} />

    
      <Routes>
        <Route path="/country/:alpha3Code" element={<CountryDetails countries={countriesState}/>} />
      </Routes>
    </div>
  );
}
export default App;

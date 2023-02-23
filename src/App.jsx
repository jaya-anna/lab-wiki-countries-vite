import { useState } from 'react'
import './App.css'
import countries from './countries.json'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";  
import CountriesList from './components/CountriesList';


function App() {

  const[countriesState, setCountriesState] = useState(countries)
  
  return <div className='App'>
<Navbar  />

<Routes>
        <Route  path="/" element={<CountriesList allCountries= {countriesState} />} />
      <Route path="./components/CountriesList" element={<CountriesList eachCountry= {CountriesList} />} />
  </Routes>

  </div>
}
export default App
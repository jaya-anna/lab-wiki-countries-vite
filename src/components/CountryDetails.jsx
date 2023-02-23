import React from 'react'
import { useParams, Link } from 'react-router-dom'

function CountryDetails({countries}) {
  
    const {alpha3Code} = useParams()
    console.log(alpha3Code)
    const country = countries.filter((country) => country.alpha3Code === alpha3Code)[0]
    console.log(country)

    return (
    <div class="col-7">
    <img
        src={`https://flagpedia.net/data/flags/icon/120x90/${country.alpha2Code.toLowerCase()}.png`}
        alt="countryflag"
      />
            <h1>{country.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {country.area}km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map((borderCountry) => {
                        return (
                            <li><Link Link to={`/country/${borderCountry}`}>{borderCountry}</Link></li>
                        )
                    })}
                     
                
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>





  )
}

export default CountryDetails
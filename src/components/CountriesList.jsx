import React from "react";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div class="col-5">
      <div class="list-group">
        {countries.map((country) => {
          return (
            <ul>
              <li className="list-group-item list-group-item-action">
               
                <div>
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={country.name.common}
                  ></img>
                </div>
                <Link to={`/country/${country.alpha3Code}`}>{country.name.common}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;

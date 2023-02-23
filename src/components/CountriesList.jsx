import React from "react";
import { Link } from "react-router-dom";



function CountriesList({allCountries}) {

  return (
    <div>
      <h1>CountriesList</h1>    

      {allCountries.map((country => {
        return (
            <Link to= {`/${country.alpha3Code}`} ><p>{country.name.common}</p> </Link> 

        )
      }))}
<nav>
<ul>
<li>
</li>

</ul>
</nav>
</div>

  );
}

export default CountriesList;

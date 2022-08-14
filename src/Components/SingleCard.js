import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CountriesContext } from '../App';

const SingleCard = () => {
  const countries = useContext(CountriesContext);
    
  const location = useLocation();
  const { countryID } = location.state;

  const country = countries.filter((country) => country.Id === countryID)[0];
  let currency = Object.values(country.Currency).map(item=>item.name);
  let languagies =  Object.values(country.Languages);
  console.log(languagies);
  return (
    <div className="m-10 p-5">
      <Link to="/">
        <button className="border border-gray-400 shadow-inner px-7 py-2">
          Back
        </button>
      </Link>
      <div>
        <img className="" src={country.Flags} alt="Country Flag" />
        <div>
          <p>name : {country.Name}</p>
          <p>native name :{country.NativeName}</p>
          <p>population : {country.Population}</p>
          <p>resion : {country.Region}</p>
          <p>sub region : {country.SubRegion}</p>
          <p>capital : {country.Capital[0]}</p>
          <div> borders : 
            {country.Borders && country.Borders.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <p>top level domain : {country.TopLevelDomain}</p>
          <p>currency : {currency}</p>
          <div>
            Lnaguagies : {languagies.map((item,index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

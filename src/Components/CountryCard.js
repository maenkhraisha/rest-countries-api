import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
   
  return (
    <Link to="/singleCard" className="links" state={{ countryID: country.Id}}>
    <div className="bg-white flex flex-col cursor-pointer "  key={country.Id}>
      <img
        className="block w-full flex-1"
        src={country.Flags}
        alt="Country Flag"
      />
      <div className="p-3">
        <p className="font-bold font-Nunito text-md mb-4">{country.Name}</p>

        <div className="flex">
          <p className="font-Nunito font-bold text-xs">Population: </p>
          <p className="text-xs">{country.Population}</p>
        </div>
        <div className="flex">
          <p className="font-Nunito font-bold text-xs">Region: </p>
          <p className="text-xs">{country.Region}</p>
        </div>
        <div className="flex">
          <p className="font-Nunito font-bold text-xs">Capital: </p>
          <p className="text-xs">{country.Capital}</p>
        </div>
      </div>
    </div>
  </Link>
    
  );
};

export default CountryCard;

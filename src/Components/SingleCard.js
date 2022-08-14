import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CountriesContext } from '../App';

const SingleCard = () => {
  const countries = useContext(CountriesContext);

  const location = useLocation();
  const { countryID } = location.state;

  const country = countries.filter((country) => country.Id === countryID)[0];
  let currency = Object.values(country.Currency).map((item) => item.name);
  let languagies = Object.values(country.Languages);

  return (
    <div className="m-3 md:m-10 md:p-5 font-Nunito dark:text-white">
      <Link to="/">
        <button className="border border-gray-400 shadow-inner px-7 py-2 mb-16">
          Back
        </button>
      </Link>
      <div className="flex flex-col md:flex md:justify-between md:gap-16">
        <div>
          <img
            className=""
            src={country.Flags}
            alt="Country Flag"
          />
        </div>
        <div className="flex-1 ">
          <p className="mb-6 font-bold text-3xl">{country.Name}</p>
          <div className="flex flex-col md:flex md:gap-28">
            <div className="">
              <div className="flex">
                <p className="font-bold text-base">native name : </p>
                <p>{country.NativeName}</p>
              </div>
              <div className="flex">
                <p className="font-bold text-base">population : </p>
                <p>{country.Population}</p>
              </div>
              <div className="flex">
                <p className="font-bold text-base">resion : </p>
                <p>{country.Region}</p>
              </div>
              <div className="flex">
                <p className="font-bold text-base">sub region : </p>
                <p>{country.SubRegion}</p>
              </div>
              <div className="flex">
                <p className="font-bold text-base">capital : </p>
                <p>{country.Capital[0]}</p>
              </div>
            </div>
            <div className="">
              <div className="flex">
                <p className="font-bold text-base">top level domain : </p>
                <p>{country.TopLevelDomain}</p>
              </div>
              <div className="flex">
                <p className="font-bold text-base">currency : </p>
                <p>{currency}</p>
              </div>
              <div>
                <div className="flex">
                  <p className="font-bold text-base">Lnaguagies :</p>
                  {languagies.map((item, index) => (
                    <p key={index}>{item + ','}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-4 mt-5">
            <p className="font-bold">Borders Countries :</p>
            {country.Borders &&
              country.Borders.map((item, index) => (
                <p className="border border-gray-400 px-4" key={index}>
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

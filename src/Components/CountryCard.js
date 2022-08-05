const CountryCard = ({ country }) => {
  return (
    <div className="bg-white flex flex-col" key={country.Id}>
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
  );
};

export default CountryCard;

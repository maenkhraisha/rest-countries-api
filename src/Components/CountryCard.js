const CountryCard = ({country}) => {
  return (
    <div key={country.Id}>
      <img src={country.Flags} alt="Country Flag" />
      <p>{country.Name}</p>
      <p>{country.Region}</p>
      <p>{country.Population}</p>
      <p>{country.Capital}</p>
    </div>
  );
};

export default CountryCard;

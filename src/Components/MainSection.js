import CountryCard from './CountryCard';

const MainSection = ({ countries,countryFilter }) => {
  return (
    <>
      {countries.filter(f=>f.Name.toLowerCase().includes(countryFilter)).map((c) => {
        return <CountryCard key={c.Id == undefined ? Math.random():c.Id } country={c} />
      })}
    </>
  );
};

export default MainSection;

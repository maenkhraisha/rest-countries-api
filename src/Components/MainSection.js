import CountryCard from './CountryCard';
import Filter from './Filter';

const MainSection = ({ countries, countryFilter,filterContinent ,filterCoutry}) => {
  return (
    <>
      <Filter filterContinent={filterContinent} filterCoutry={filterCoutry} />
      <div
        className="bg-zinc-100 px-16 grid 
      grid-cols-auto-fit gap-5 "
      >
        {countries
          .filter((f) => f.Name.toLowerCase().includes(countryFilter))
          .map((c) => {
            return (
              <CountryCard
                key={c.Id == undefined ? Math.random() : c.Id}
                country={c}
              />
            );
          })}
      </div>
    </>
  );
};

export default MainSection;

import CountryCard from './CountryCard';

const MainSection = ({ countries, countryFilter }) => {
  return (
    <div className="bg-zinc-100 px-16 flex flex-col gap-10 md:grid md:grid-cols-4 md:gap-14">
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
  );
};

export default MainSection;

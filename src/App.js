import { useEffect, useState } from 'react';

import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Filter from './Components/Filter';

import './index.css';

const APIService = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  let newObj = [];
  data.map((c) => {
    newObj.push({
      Id: c.ccn3,
      Name: c.name.common,
      Population: c.population,
      Region: c.region,
      Capital: c.capital,
      Flags: c.flags.png,
    });
  });
  return newObj;
};

function App() {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [lightTheme, setLightTheme] = useState(true);

  useEffect(() => {
    APIService().then((res) => {
      setCountries(res);
    });
  }, []);

  const filterContinent = async (continent) => {
    const response = await APIService();
    setCountries(response);
    if (continent !== 'All Countries')
      setCountries(response.filter((item) => item.Region == continent));
  };

  const filterCoutry = (country) => {
    setCountryFilter(country);
  };

  const toggoleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <div>
      <Header theme={lightTheme} themeChange={toggoleTheme} />
      <Filter filterContinent={filterContinent} filterCoutry={filterCoutry} />
      <MainSection countries={countries} countryFilter={countryFilter} />
    </div>
  );
}

export default App;

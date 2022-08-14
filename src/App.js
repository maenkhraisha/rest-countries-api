import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import MainSection from './Components/MainSection';
import SingleCard from './Components/SingleCard';

import './index.css';
export const CountriesContext = createContext();

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
      Borders: c.borders,
      NativeName: c.name.official,
      SubRegion: c.subregion,
      Currency: c.currencies,
      Languages: c.languages,
      TopLevelDomain: c.tld,
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
    if(lightTheme) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  return (
    <CountriesContext.Provider value={countries}>
      <div className="overflow-hidden dark:bg-darkBg">
        <Router>
          <Header theme={lightTheme} themeChange={toggoleTheme} />
          <Routes>
            <Route
              path="/"
              element={
                <MainSection
                  filterContinent={filterContinent}
                  filterCoutry={filterCoutry}
                  countries={countries}
                  countryFilter={countryFilter}
                />
              }
            />
            <Route path="/singleCard" element={<SingleCard />} />
          </Routes>
        </Router>
      </div>
    </CountriesContext.Provider>
  );
}

export default App;

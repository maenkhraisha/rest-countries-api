import { useEffect, useState } from 'react';

import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Filter from './Components/Filter';

const APIService = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  let newObj = [];
  data.map((c) => {
    newObj.push({
      Id: c.ccn3,
      Name: c.name.official,
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
  }

  return (
    <>
      <Header />
      <Filter filterContinent={filterContinent} filterCoutry={filterCoutry}/>
      <MainSection countries={countries} countryFilter={countryFilter} />
    </>
  );
}

export default App;

// import React, { useState } from 'react';
// import './App.css';
 
// function App() {
 
//   const fruit = ['apple', 'banana', 'orange', 'grapefruit',
//     'mango', 'strawberry', 'peach', 'apricot'];
 
//   const [filter, setFilter] = useState('');
 
//   return (
//     <div className="App">
//       <p>
//         Type to filter the list:
//         <input id="filter"
//           name="filter"
//           type="text"
//           value={filter}
//           onChange={event => setFilter(event.target.value)}
//         />
//       </p>
//       <ul>
//       {fruit.filter(f => f.includes(filter) || filter === '')
//             .map(f => <li key={f}>{f}</li>)}
//       </ul>
//     </div>
//   );
// }
 
// export default App;
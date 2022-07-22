import { useEffect, useState } from 'react';

const APIService = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data;
};

const HomePage = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    APIService().then((res) => setCountry(res));
  }, []);
  return (
    <>
      <h2>home page</h2>
      {country.map((c) => (
        <div key={c.ccn3}>
          <img src={c.flags.png} alt="Country Flag" />
          <p>{c.name.official}</p>
          <p>{c.region}</p>
          <p>{c.population}</p>
          <p>{c.capital}</p>
        </div>
      ))}
    </>
  );
};

export default HomePage;

import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Filter = ({ filterContinent, filterCoutry }) => {
  const [continent, setContinent] = useState('');

  const onSelectContinent = (event) => {
    filterContinent(event);
    setContinent(event);
  };

  const filterText = (event) => {
    filterCoutry(event);
  };

  return (
    <div className="bg-zinc-100 py-10 px-16 flex flex-col gap-4 md:flex-row md:justify-between">
      <div>
        <BsSearch className="absolute mt-3 ml-3"/>
        <input
          className="flex-1 py-2 pl-11 w-full focus:outline-none"
          type="text"
          onChange={(e) => filterText(e.target.value)}
          placeholder="Search for a country"
        />
      </div>
      <select
      className="py-2 px-4 max-w-xs focus:outline-none "
        name="category"
        value={continent}
        onChange={(event) => onSelectContinent(event.target.value)}
      >
        <option  id="0">All Countries</option>
        <option id="1">Asia</option>
        <option id="2">Africa</option>
        <option id="3">Americas</option>
        <option id="4">Oceania</option>
        <option id="5">Europe</option>
        <option id="5">Antarctic</option>
      </select>
    </div>
  );
};

export default Filter;

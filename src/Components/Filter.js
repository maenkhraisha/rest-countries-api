import {useState} from "react";


const Filter = ({filterContinent,filterCoutry}) => {
  const [continent, setContinent] = useState('');

  const onSelectContinent = (event) => {
    filterContinent(event)
    setContinent(event)
  }

  const filterText = (event) =>{    
    filterCoutry(event)
  }

  return (
    <>
      <input type="text" onChange={(e)=>filterText(e.target.value)} />
      <select name="category" value={continent} onChange={event => onSelectContinent(event.target.value)}>
            <option id="0" >All Countries</option>
            <option id="1" >Asia</option>
            <option id="2" >Africa</option>
            <option id="3" >Americas</option>
            <option id="4" >Oceania</option>
            <option id="5" >Europe</option>
            <option id="5" >Antarctic</option>     
        </select>
    </>
  );
};

export default Filter;

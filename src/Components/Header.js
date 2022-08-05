import '../App.css'
import { BsMoonFill, BsMoon } from 'react-icons/bs';

const Header = () => {

  return (
    <div className="header" >
      <h1>Where in the world?</h1>
      <div>
        <BsMoonFill size={25} />
        <BsMoon size={25} />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;

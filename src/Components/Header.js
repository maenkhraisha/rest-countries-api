import '../index.css';
import { BsMoonFill, BsMoon } from 'react-icons/bs';

const Header = ({ theme, themeChange }) => {
  return (
    <div className="flex px-16 py-4 border-b-4 ">
      <h1 className="font-bold font-Nunito flex-1">Where in the world?</h1>
      <div className="flex">
        {theme ? (
          <>
            <BsMoonFill
              className="cursor-pointer text-gray-500"
              onClick={themeChange}
              size={20}
            />
          </>
        ) : (
          <>
            <BsMoon
              className="cursor-pointer "
              onClick={themeChange}
              size={20}
              fill={'white'}
            />
          </>
        )}
        {
          <p className="pl-3 font-bold text-sm font-Nunito text-gray-500 ">
            {theme ? 'Dark Mode' : 'Light Mode'}
          </p>
        }
      </div>
    </div>
  );
};

export default Header;

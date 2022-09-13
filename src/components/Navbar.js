import { ImCalculator } from 'react-icons/im';
import { IoIosCalculator } from 'react-icons/io';
import { AiFillProfile } from 'react-icons/ai';
import { BsChatLeftQuote } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

const data = [
  { address: '/', name: 'Home', Icon: IoIosCalculator },
  { address: '/about', name: 'About', Icon: AiFillProfile },
  { address: '/qoute', name: 'Quote', Icon: BsChatLeftQuote },
];

const NavBar = () => {
  const navigate = useLocation();
  return (
    <nav className="flex w-full justify-between border-b  border-gray-100 items-center">
      <header>
        <div className="px-4 py-2 mx-auto max-w-screen-xl  sm:px-6 lg:px-8">
          <div className="sm:justify-between sm:items-center sm:flex">
            <div className="text-center sm:text-left">
              <h1 className="text-lg font-bold text-gray-900 sm:text-3xl">
                MM
                <ImCalculator className=" inline mx-2 mb-1" />
              </h1>
            </div>
          </div>
        </div>
      </header>
      <ul className="flex px-1 sm:px-4 gap-2 md:gap-4 ">
        {data.map((item) => (
          <li className="flex-1 relative" key={item.name}>
            <Link to={item.address}>
              <div className="flex items-center justify-center gap-1 text-gray-900 hover:text-orange-600 transition-all ease-in-out duration-200">
                <span className="ml-3 text-sm font-medium ">{item.name}</span>
                <item.Icon />
              </div>
            </Link>
            {navigate.pathname === item.address && (
              <span className="absolute -bottom-[12px] sm:-bottom-[19px] left-0 w-full h-[1px] bg-[#F5913E]" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

import { Link } from "react-router";
import Logo from "../atoms/logo/Logo";
import MainNavigation from "../molecules/navigation/MainNavigation";
import { LuMapPin, LuUser } from "react-icons/lu";
import Button from "../atoms/button/Button";
import SearchProductInput from "../molecules/SearchProductInput";

const Header = () => {

  return (
    <header>
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center border-b py-5  border-gray-300 gap-10">
          <div className="flex-1">
            <Link to=".">
              <Logo />
            </Link>
          </div>

          <div className="w-full flex-1 sm:flex-1 md:flex-2 lg:flex-3">
            <SearchProductInput/>
          </div>

          <div className="flex-1 flex justify-end">
            <ul className="flex gap-3 whitespace-nowrap">
              <li className="flex items-center gap-1 cursor-pointer">
                <i>
                  <LuMapPin/>
                </i>
                <Button variant="text">Temukan toko</Button>
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                <i>
                  <LuUser/>
                </i>
                <Button variant="text">Sign In</Button>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-b border-gray-300">
          <MainNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header
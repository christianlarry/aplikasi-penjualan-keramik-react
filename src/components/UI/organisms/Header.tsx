import { Link } from "react-router";
import Logo from "../atoms/logo/Logo";
import MainNavigation from "../molecules/navigation/MainNavigation";
import { LuMapPin, LuUser } from "react-icons/lu";
import Button from "../atoms/button/Button";
import SearchProductInput from "../molecules/SearchProductInput";
import bisnisStrings from "../../../constants/bisnis.strings";
import { forwardRef } from "react";

const Header = forwardRef<HTMLDivElement>((_,ref) => {
  return (
    <header>
      <div ref={ref} className="fixed left-0 top-0 w-full z-50 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center border-b py-5 px-5 border-gray-200 gap-10">

            <div className="flex-1">
              <div className="w-[120px]">
                <Link to=".">
                  <Logo />
                </Link>
              </div>
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
                  <Link to={bisnisStrings.location.gMapsLink} target="_blank">
                    <Button variant="text">Temukan toko</Button>
                  </Link>
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
    
          <div className="border-b border-gray-200 px-5">
            <MainNavigation />
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header
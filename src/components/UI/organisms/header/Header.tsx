import { Link } from "react-router";
import Logo from "../../atoms/logo/Logo";
import MainNavigation from "../../molecules/navigation/MainNavigation";
import Input from "../../atoms/input/Input";
import { LuMapPin, LuUser } from "react-icons/lu";
import Button from "../../atoms/button/Button";

const Header = () => {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center border-b py-5  border-gray-300 gap-10">
          <div>
            <Link to=".">
              <Logo />
            </Link>
          </div>

          <div className="w-6/12">
            <Input type="search" placeholder="Cari ubin..."/>
          </div>

          <div>
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
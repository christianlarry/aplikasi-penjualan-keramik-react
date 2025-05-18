import { Link } from "react-router";
import Logo from "../../atoms/logo/Logo";
import MainNavigation from "../../molecules/navigation/MainNavigation";

const Header = () => {
  return (
    <header className="border-b border-gray-300 bg-gray-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-5 px-5">
        <Link to=".">
          <Logo />
        </Link>
        <MainNavigation />
      </div>
    </header>
  );
};

export default Header
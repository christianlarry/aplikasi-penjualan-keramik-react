import { Link, useLocation } from "react-router";
import Logo from "../atoms/logo/Logo";
import MainNavigation from "../molecules/navigation/MainNavigation";
import { LuMapPin, LuMenu, LuSearch, LuUser, LuX } from "react-icons/lu";
import Button from "../atoms/button/Button";
import SearchProductInput from "../molecules/SearchProductInput";
import bisnisStrings from "../../../constants/bisnis.strings";
import { forwardRef, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import globalStrings from "../../../constants/global.strings";

const Header = forwardRef<HTMLDivElement>((_, ref) => {

  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState<boolean>(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const handleBurgerBtnClick = ()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleSearchBtnClick = ()=>{
    setIsSidebarOpen(false)

    setIsSearchBoxOpen(true)
  }

  const location = useLocation()

  useEffect(()=>{
    setIsSidebarOpen(false)
  },[location.pathname])

  return (
    <header>
      <div ref={ref} className="fixed left-0 top-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex justify-between items-center border-b py-5 px-5 border-gray-200 gap-10">

            <div className="block md:hidden">
              <div className="flex flex-wrap gap-1 text-xl">
                <button className="p-1 cursor-pointer hover:scale-110" onClick={handleBurgerBtnClick}>
                  {isSidebarOpen && <LuX />}
                  {!isSidebarOpen && <LuMenu />}
                </button>
                <button className="p-1 cursor-pointer hover:scale-110" onClick={handleSearchBtnClick}>
                  <LuSearch />
                </button>
              </div>
              
              {isSearchBoxOpen &&
                <div className="absolute inset-0 w-full h-full bg-white border-b border-gray-200">
                  <div className="h-full flex items-center px-5 gap-2">
                    <div className="w-full">
                      <SearchProductInput />
                    </div>
                    <button className="cursor-pointer hover:underline" onClick={() => setIsSearchBoxOpen(false)}>
                      Tutup
                    </button>
                  </div>
                </div>
              }

              <Sidebar isOpen={isSidebarOpen}/>
            </div>

            <div className="md:flex-1">
              <div className="w-[120px]">
                <Link to=".">
                  <Logo />
                </Link>
              </div>
            </div>

            <div className="hidden md:block w-full flex-1 md:flex-3">
              <SearchProductInput />
            </div>

            <div className="hidden md:block flex-1">
              <div className="flex justify-end">
                <ul className="flex gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-1 cursor-pointer">
                    <i>
                      <LuMapPin />
                    </i>
                    <Link to={bisnisStrings.location.gMapsLink} target="_blank">
                      <Button variant="text">Temukan toko</Button>
                    </Link>
                  </li>
                  <li className="flex items-center gap-1 cursor-pointer">
                    <i>
                      <LuUser />
                    </i>
                    <Link to={globalStrings.signUpLink}>
                      <Button variant="text">Sign In</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="hidden md:block border-b border-gray-200 px-5">
            <MainNavigation />
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header
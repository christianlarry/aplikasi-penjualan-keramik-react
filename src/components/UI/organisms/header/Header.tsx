import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../atoms/logo/Logo";
import MainNavigation from "../../molecules/navigation/MainNavigation";
import Input from "../../atoms/input/Input";
import { LuMapPin, LuUser } from "react-icons/lu";
import Button from "../../atoms/button/Button";
import { useEffect, useState } from "react";

const Header = () => {

  // State
  const [searchValue,setSearchValue] = useState<string>()

  const navigate = useNavigate()
  const location = useLocation()

  const handleSearchKeydown:React.KeyboardEventHandler<HTMLInputElement> = (e)=>{
    if(e.key === "Enter" && e.currentTarget.value !== ""){
      const searchParams = new URLSearchParams()

      searchParams.append("search",e.currentTarget.value)

      navigate("/product-catalog?"+searchParams.toString())
    }
  }

  const handleSearchChange:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    const keyword = e.currentTarget.value

    setSearchValue(keyword)

    if(keyword.length === 0){
      navigate("/product-catalog")
    }
  }

  useEffect(()=>{
    const searchParams = new URLSearchParams(location.search)

    if(searchParams.has("search")){
      setSearchValue(searchParams.get("search") || undefined)
    }
  },[location])

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
            <Input type="search" placeholder="Cari ubin..." onKeyDown={handleSearchKeydown} onChange={handleSearchChange} value={searchValue}/>
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
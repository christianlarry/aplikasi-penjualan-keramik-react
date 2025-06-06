import { useEffect } from "react"
import SidebarNavigation from "../molecules/navigation/SidebarNavigation"
import { Link } from "react-router"
import { LuMapPin, LuUser } from "react-icons/lu"
import Button from "../atoms/button/Button"
import bisnisStrings from "../../../constants/bisnis.strings"
import globalStrings from "../../../constants/global.strings"

interface Props{
  isOpen:boolean
}

const Sidebar = ({isOpen}:Props) => {
  
  useEffect(()=>{
    if(isOpen){
      document.body.style.overflow = "hidden"
    }

    return ()=>{
      document.body.style.overflow = ""
    }
  },[isOpen])
  
  if(!isOpen) return null

  return (
    <div className="absolute left-0 top-full w-full xs:max-w-[300px] h-[calc(100vh-83px)] bg-white overflow-auto">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-auto">
          <SidebarNavigation/>
        </div>
        <ul className="border-t border-gray-300 pt-2 px-5">
          <li>
            <Link to={globalStrings.signUpLink}>
              <div className="flex gap-2 py-2">
                <i><LuUser /></i> 
                <Button variant="text">Sign in</Button>
              </div>
            </Link>
          </li>
          <li>
            <Link to={bisnisStrings.location.gMapsLink} target="_blank">
              <div className="flex gap-2 py-2">
                <i><LuMapPin /></i> 
                <Button variant="text">Temukan toko</Button>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
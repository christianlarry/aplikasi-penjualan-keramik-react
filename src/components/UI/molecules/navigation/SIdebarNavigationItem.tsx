import { Link } from "react-router"
import type { NavigationItem } from "../../../../constants/navigation"
import { LuChevronRight } from "react-icons/lu"
import { useState } from "react"
import { cn } from "../../../../utils/classNames"

interface Props {
  item: NavigationItem
}

const SidebarNavigationItem = ({ item }: Props) => {

  const [isShowDropdown,setIsShowDropdown] = useState<boolean>(false)

  const handleDropdownClick = ()=>{
    setIsShowDropdown(!isShowDropdown)
  }

  return (
    <li key={item.name}>
      <div className="flex items-center justify-between">
        <Link to={item.path} className="flex-1 hover:translate-x-1 transition-transform">
          <div className="flex items-center gap-2 py-2">
            <item.Icon className="text-gray-600" />
            <p className="font-semibold">{item.name}</p>
          </div>
        </Link>
        {item.children &&
          <button className="aspect-square block p-1 text-xl cursor-pointer hover:scale-120" onClick={handleDropdownClick}>
            <LuChevronRight className={cn(isShowDropdown && "rotate-90")}/>
          </button>
        }
      </div>
      {/* SECOND NAV ITEM */}
      {(item.children && isShowDropdown) &&
        <ul className="ps-4">
          {item.children.map(children => (
            <li>
              <Link to={item.path + children.path} className="flex-1">
                <div className="flex items-center gap-2 py-2 hover:translate-x-1 transition-transform">
                  <children.Icon className="text-gray-600" />
                  <p>{children.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      }
    </li>
  )
}

export default SidebarNavigationItem
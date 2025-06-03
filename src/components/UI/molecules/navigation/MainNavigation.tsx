import { Link } from "react-router"

import { MAIN_NAVIGATION } from "../../../../constants/navigation"
import { LuChevronDown, LuChevronRight } from "react-icons/lu"

const MainNavigation = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        {MAIN_NAVIGATION.map((firstNavItem)=>(
          <li key={firstNavItem.name} className="relative group/firstNavItem">
            <Link key={firstNavItem.name} to={firstNavItem.path} className="block py-2 hover:underline">
              <div className="flex items-center gap-2">
                <firstNavItem.Icon className="text-gray-600"/>
                <p className="font-semibold">{firstNavItem.name}</p>
              </div>
            </Link>

            {/* DROPDOWN */}

            {firstNavItem.children && 
            <div className="absolute top-full left-0 z-50 hidden group-hover/firstNavItem:block">
              <ul className=" bg-white shadow-md rounded-md grid grid-cols-1 lg:grid-cols-2 w-max">
                {firstNavItem.children.map(secondNavItem=>(
                  <li>
                    <Link key={secondNavItem.name} to={firstNavItem.path+secondNavItem.path} className="w-full block p-5 max-w-90 group/secondNavItem">
                      <div className="flex items-start gap-4">
                        <div className="p-2 border rounded-md border-gray-300">
                          <secondNavItem.Icon className="text-gray-500 text-2xl"/>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1">
                            <p className="whitespace-nowrap font-semibold group-hover/secondNavItem:underline">{secondNavItem.name}</p>
                            <LuChevronRight/>
                          </div>
                          {secondNavItem.description && <p className="text-gray-500">{secondNavItem.description}</p>}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNavigation
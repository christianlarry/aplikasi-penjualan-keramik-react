import { Link } from "react-router"

import { MAIN_NAVIGATION } from "../../../../constants/navigation"

const MainNavigation = () => {
  return (
    <nav>
      <ul className="flex">
        {MAIN_NAVIGATION.map((val)=>(
          <li key={val.name}>
            <Link to={val.path} className="block py-2 px-2 hover:underline">
              {val.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNavigation
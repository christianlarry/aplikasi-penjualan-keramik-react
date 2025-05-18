import { Link } from "react-router"

import { MAIN_NAVIGATION } from "../../../../constants/navigation"

const MainNavigation = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        {MAIN_NAVIGATION.map((val)=>(
          <li key={val.name}>
            <Link to={val.path}>{val.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNavigation
import { MAIN_NAVIGATION } from "../../../../constants/navigation"
import SidebarNavigationItem from "./SIdebarNavigationItem"

const SidebarNavigation = () => {
  return (
    <nav className="px-5">
      <ul>
        {MAIN_NAVIGATION.map((firstNavItem) => (
          <SidebarNavigationItem item={firstNavItem}/>
        ))}
      </ul>
    </nav>
  )
}

export default SidebarNavigation
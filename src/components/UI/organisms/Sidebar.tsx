import SidebarNavigation from "../molecules/navigation/SidebarNavigation"

interface Props{
  isOpen:boolean
}

const Sidebar = ({isOpen}:Props) => {
  
  if(!isOpen) return null

  return (
    <div className="absolute left-0 top-full w-full xs:max-w-[300px] h-[calc(100vh-83px)] bg-white overflow-auto">
      <SidebarNavigation/>
    </div>
  )
}

export default Sidebar
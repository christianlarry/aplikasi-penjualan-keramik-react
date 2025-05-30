import { Outlet } from "react-router"
import Header from "../UI/organisms/Header"
import Footer from "../UI/organisms/Footer"

const MainLayout = ()=>{
  return (
    <div className="flex flex-col min-h-svh">
      
      <div className="flex-1">

        <Header/>
        
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Outlet/>
        </div>

      </div>

      <Footer/>
      
    </div>
  )
}

export default MainLayout
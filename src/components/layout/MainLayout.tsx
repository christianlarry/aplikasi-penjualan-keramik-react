import { Outlet } from "react-router"
import Header from "../UI/organisms/Header"
import Footer from "../UI/organisms/Footer"

const MainLayout = ()=>{
  return (
    <div className="flex flex-col min-h-svh">
      
      <div className="flex-1">

        <Header/>
        
        <main>
          <div className="max-w-7xl mx-auto px-5">
            <Outlet/>
          </div>
        </main>

      </div>

      <Footer/>
      
    </div>
  )
}

export default MainLayout
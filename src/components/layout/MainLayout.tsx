import { Outlet, useLocation } from "react-router"
import Header from "../UI/organisms/Header"
import Footer from "../UI/organisms/Footer"
import { useEffect } from "react"

const MainLayout = ()=>{

  const location = useLocation()

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  },[location.pathname])

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
import { Outlet, useLocation } from "react-router"
import Header from "../UI/organisms/Header"
import Footer from "../UI/organisms/Footer"
import { useEffect, useRef, useState } from "react"

const MainLayout = ()=>{

  const location = useLocation()

  // STATE
  const [headerHeight,setHeaderHeight] = useState<number>(0)

  // REF
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(headerRef.current){
      const headerEl = headerRef.current
      setHeaderHeight(headerEl.offsetHeight)
    }
  },[])

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  },[location.pathname])

  return (
    <div className="flex flex-col min-h-svh">
      
      <div className="flex-1">

        <Header ref={headerRef}/>
        
        <div className="max-w-7xl mx-auto flex flex-col gap-8" style={{marginTop: headerHeight}}>
          <Outlet/>
        </div>

      </div>

      <Footer/>
      
    </div>
  )
}

export default MainLayout
import { Outlet, useLocation } from "react-router"
import Header from "../UI/organisms/Header"
import Footer from "../UI/organisms/Footer"
import { useEffect } from "react"

// Handle Error Page
import { ErrorBoundary } from "react-error-boundary"
import InternalErrorPage from "../pages/errors/InternalErrorPage"

const MainLayout = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [location.pathname])

  return (
    <ErrorBoundary FallbackComponent={InternalErrorPage}>
      <div className="flex flex-col min-h-svh">

        <div className="flex-1">

          <Header />


          <div className="max-w-7xl mx-auto flex flex-col gap-8 mt-[83px] md:mt-[124px]">
            <Outlet />
          </div>

        </div>

        <Footer />

      </div>
    </ErrorBoundary>
  )
}

export default MainLayout
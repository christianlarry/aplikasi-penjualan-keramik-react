import { Link, Outlet } from "react-router"

// import logo
import Logo from "../../assets/images/logo.png"

const MainLayout = ()=>{
  return (
    <div className="flex flex-col min-h-svh">
      <div className="flex-1">
        <header>
          <div className="flex justify-between items-center max-w-7xl mx-auto py-5 px-5">
            <div>
              <Link to=".">
                <img src={Logo} alt="Logo" className="block" width={120}/>
              </Link>
            </div>
            <nav>
              <ul className="flex gap-5">
                <li>
                  <Link to={"/"}>Beranda</Link>
                </li>
                <li>
                  <Link to={"/product-catalog"}>Katalog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <div className="max-w-7xl mx-auto px-5">
            <Outlet/>
          </div>
        </main>
      </div>

      <footer>
        <div className="max-w-7xl mx-auto px-5">
          <h1>This is page footer</h1>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
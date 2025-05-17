import { Link } from "react-router"

// import logo
import Logo from "../../../assets/images/logo.png"

const HomePage = ()=>{
  return (
    <div className="flex flex-col">
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
          <button className="cursor-pointer ">
            Kontak
          </button>
        </div>
      </header>
      <main>
        <h1>This is main</h1>
      </main>
      <footer>
        <h1>This is page footer</h1>
      </footer>
    </div>
  )
}

export default HomePage
import { Link } from "react-router";
import ProductCatalog from "../../UI/organisms/ProductCatalog";
import Button from "../../UI/atoms/button/Button";
import { LuChevronRight } from "react-icons/lu";

const otherProductCatalogLinks = [
  {
    url: "/catalog/discount",
    label: "Sedang Diskon"
  },
  {
    url: "/catalog/new-arrivals",
    label: "Produk Terbaru"
  },
  {
    url: "/catalog/best-seller",
    label: "Produk Terlaris"
  }
]

const CatalogPage = ()=>{
  return (
    <div className="flex flex-col gap-8 mt-1">
      <section>
        <div>
          {/* Ini adalah Banner/Hero */}
          <div className="flex flex-col lg:flex-row">
            <div className="flex-3 duration-500">
              <div className="aspect-2/1 overflow-hidden">
                <img 
                src="https://images.unsplash.com/photo-1708540084677-dc5838b37627?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="All Product Banner Image"
                className="block h-full w-full object-cover object-center transition-transform hover:scale-105 duration-800"/>
              </div>
              <div className="bg-stone-700 text-white p-5 lg:p-15">
                <div className="flex flex-col gap-3">
                  <h1 className="text-4xl font-light">Katalog Ubin Keramik</h1>
                  <p className="font-medium">Jelajahi pilihan ubin keramik terbaik kami untuk menghadirkan sentuhan elegan dan kualitas tinggi ke setiap sudut ruangan Anda.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 duration-500 bg-stone-200 text-black p-5 lg:p-15 flex flex-col gap-3">
              <h2 className="text-2xl underline">Lihat Juga</h2>
              <nav>
                <ul className="flex flex-row gap-3 lg:flex-col lg:gap-0 flex-wrap">
                  {otherProductCatalogLinks.map(item=>(
                    <li key={item.label}>
                      <Link to={item.url}>
                        <Button variant="text" className="block md:text-lg! text-start">{item.label}</Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Ini adalah Breadcrumbs */}
          <div className="my-8">
            <nav>
              <ul className="flex items-center gap-1 flex-wrap">
                <li>
                  <Link to={"/"}>
                    <Button variant="text" className="block text-base!">Beranda</Button>
                  </Link>
                </li>
                <li>
                  <span className="text-base"><LuChevronRight/></span>
                </li>
                <li>
                  <Link to={"/"}>
                    <Button variant="text" className="block text-base!">Katalog</Button>
                  </Link>
                </li>
                <li>
                  <span className="text-base"><LuChevronRight/></span>
                </li>
                <li>
                  <Button variant="text" className="block text-base! font-semibold pointer-events-none">Semua Produk</Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section>
        <ProductCatalog/>
      </section>
    </div>
  );
}

export default CatalogPage
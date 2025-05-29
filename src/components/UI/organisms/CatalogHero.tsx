import { Link, useLocation } from "react-router"
import Button from "../atoms/button/Button"
import { cn } from "../../../utils/classNames"

const heroOtherLinksItem = [
  {
    url: "/catalog/all-products",
    label: "All Products"
  },
  {
    url: "/catalog/discount",
    label: "Discount Products"
  },
  {
    url: "/catalog/new-arrivals",
    label: "New Arrivals"
  },
  {
    url: "/catalog/best-seller",
    label: "Best Seller"
  }
]

interface Props{
  title:string,
  description:string,
  imageSrc:string
}

const CatalogHero = ({
  title,
  description,
  imageSrc
}:Props) => {

  const location = useLocation()

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-3">
        <div className="aspect-2/1 overflow-hidden">
          <img
            src={imageSrc}
            alt={title + " | Image"}
            className="block h-full w-full object-cover object-center transition-transform hover:scale-105 duration-800" />
        </div>
        <div className="bg-stone-700 text-white px-5 py-10 lg:p-15">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl md:text-4xl font-normal md:font-light">{title}</h1>
            <p className="font-light md:font-medium">{description}</p>
          </div>
        </div>
      </div>

      {heroOtherLinksItem &&
        <div className="flex-1 bg-stone-100 text-black p-5 lg:p-15 flex flex-col gap-3">
          <h2 className="text-2xl underline">Katalog Lainnya</h2>
          <nav>
            <ul className="flex flex-row gap-3 lg:flex-col lg:gap-0 flex-wrap">
              {heroOtherLinksItem && heroOtherLinksItem.map(item => (
                <li key={item.label} className="lg:py-1 lg:border-b lg:border-stone-600">
                  <Link 
                    to={item.url} 
                    className={
                      cn(
                        "block hover:translate-x-1 transition-transform",
                        item.url === location.pathname && "pointer-events-none underline"
                      )
                    }
                  >
                    <Button variant="text" className="block md:text-lg! text-start">{item.label}</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      }
    </div>
  )
}

export default CatalogHero
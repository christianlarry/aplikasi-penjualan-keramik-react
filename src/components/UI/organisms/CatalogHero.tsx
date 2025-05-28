import { Link } from "react-router"
import Button from "../atoms/button/Button"

interface Props{
  title:string,
  description:string,
  imageSrc:string,
  otherLinks?:{label:string,url:string}[]
}

const CatalogHero = ({
  title,
  description,
  imageSrc,
  otherLinks
}:Props) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-3 duration-500">
        <div className="aspect-2/1 overflow-hidden">
          <img
            src={imageSrc}
            alt={title + " | Image"}
            className="block h-full w-full object-cover object-center transition-transform hover:scale-105 duration-800" />
        </div>
        <div className="bg-stone-700 text-white p-5 lg:p-15">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-light">{title}</h1>
            <p className="font-medium">{description}</p>
          </div>
        </div>
      </div>

      {otherLinks &&
        <div className="flex-1 duration-500 bg-stone-200 text-black p-5 lg:p-15 flex flex-col gap-3">
          <h2 className="text-2xl underline">Lihat Juga</h2>
          <nav>
            <ul className="flex flex-row gap-3 lg:flex-col lg:gap-0 flex-wrap">
              {otherLinks && otherLinks.map(item => (
                <li key={item.label}>
                  <Link to={item.url}>
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
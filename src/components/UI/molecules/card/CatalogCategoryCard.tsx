import { Link } from "react-router"
import PrimaryButton from "../../atoms/button/PrimaryButton"

interface Props{
  title:string
  url:string
  imgSrc:string
}

const buttonText:string = "Lihat Katalog"

const CatalogCategoryCard = ({
  imgSrc,
  title,
  url
}:Props) => {
  return (
    <Link to={url}>
      <div className="relative overflow-hidden aspect-3/2 rounded-2xl group hover:shadow-xl transition-all duration-500">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center gap-4 md:gap-8 relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl text-white font-normal sm:font-light">{title}</h2>
            <PrimaryButton>{buttonText}</PrimaryButton>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full">
          <img src={imgSrc} alt={title} className="object-cover object-center h-full w-full group-hover:scale-105 transition duration-500" />
        </div>
      </div>
    </Link>
  )
}

export default CatalogCategoryCard
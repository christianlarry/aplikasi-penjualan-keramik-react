import { Link } from "react-router"

interface Props{
  name:string
  url:string
  imgSrc:string
}

const RoomCategoryCard = ({
  imgSrc,
  name,
  url
}:Props) => {
  return (
    <Link to={url}>
      <div className="flex flex-col items-center gap-2">
        <div className="overflow-hidden rounded-2xl">
          <img src={imgSrc} alt={name} className="block w-full object-center object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default RoomCategoryCard
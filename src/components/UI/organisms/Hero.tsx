import { Link } from "react-router"
import PrimaryButton from "../atoms/button/PrimaryButton"

interface Props{
  title:string,
  description:string,
  imgSrc:string,
  links?:{label:string,url:string}[]
}

const Hero = ({
  description,
  title,
  imgSrc,
  links
}:Props)=>{
  return (
    <div className="bg-stone-100 relative overflow-hidden group">

      <div className="px-8 py-15 sm:px-30 sm:py-40 relative z-20 flex justify-center items-center backdrop-brightness-80">

        <div className="flex flex-col gap-4 sm:gap-8 items-center text-center text-white max-w-[450px]">
          <h1 className="text-2xl sm:text-5xl">{title}</h1>
          <p className="text-white!">{description}</p>
          <div className="flex gap-2 flex-wrap justify-center items-center">  
            {links && links.map(link=>(
              <Link to={link.url} className="block" key={link.label}>
                <PrimaryButton>{link.label}</PrimaryButton>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <div className="absolute inset-0 w-full h-full z-10 backdrop-blur-xs transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

      <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-800">
        <img src={imgSrc} alt="Hero Background" className="block w-full h-full object-center object-cover"/>
      </div>
    </div>
  )
}

export default Hero
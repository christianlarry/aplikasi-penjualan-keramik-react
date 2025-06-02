import { Link } from "react-router"
import PrimaryButton from "../../atoms/button/PrimaryButton"

interface Props{
  title: string,
  description: string,
  link?:{
    label:string,
    url:string
  }
}

const ShowcaseBanner = ({
  title,
  description,
  link
}:Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between gap-4 flex-wrap relative z-10 text-white px-8 sm:px-16 md:px-28 py-16 md:py-24 backdrop-brightness-80 backdrop-blur-xs">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-2xl md:text-4xl text-white font-semibold uppercase">{title}</h2>
          <p className="text-base font-medium md:text-xl md:font-light">{description}</p>
        </div>
        {link && 
          <div>
            <Link to={link.url}>
              <PrimaryButton>{link.label}</PrimaryButton>
            </Link>
          </div>
        }
      </div>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1722348673535-c8f00bc0fc45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={title} className="w-full h-full object-cover object-center" />
      </div>
    </div>
  )
}

export default ShowcaseBanner
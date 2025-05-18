// import logo
import LogoUsaha from "../../../../assets/images/logo.png"

interface Props{
  width?:number
}

const Logo = ({width=120}:Props)=>{
  return (
  <img src={LogoUsaha} alt="Logo" className="block" width={width}/>
)}

export default Logo
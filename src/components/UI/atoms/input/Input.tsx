import { LuSearch } from "react-icons/lu"
import { cn } from "../../../../utils/classNames"
import { useRef } from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  onSearch:(value:string)=>void
}

const Input = ({
  className,
  type,
  onSearch,
  ...props
}:Props)=>{

  const inputRef = useRef<HTMLInputElement>(null)

  // handler
  const handleSearchBtnClick = ()=>{
    if(inputRef.current){
      onSearch(inputRef.current.value)
    }
  }

  return (
    <div className="py-2 px-3 border rounded-md border-gray-200 flex items-center">
      {type === "search" &&
      <i className="block border-e border-gray-300 text-gray-800 pe-2 me-2 cursor-pointer" onClick={handleSearchBtnClick}>
        <LuSearch/>
      </i>
      }
      <input 
        {...props}
        ref={inputRef}
        type={type}
        className={cn(
          className,
          "text-sm outline-0 w-full text-gray-800"
        )} 
      />
    </div>
  )
}

export default Input
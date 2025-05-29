import { cn } from "../../../../utils/classNames"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: "outline" | "contained" | "text" | "pagination",
  size?: "sm" | "md" | "lg",
  active?:boolean
  children:React.ReactNode
}

const Button = ({
  children,
  size = "md",
  variant = "contained",
  active=false,
  disabled,
  className,
  ...props
}:Props)=>{
  return (
    <button 
      className={cn(
        className,  
        "cursor-pointer rounded-md text-sm font-medium transition-colors outline-0 bg-gray-200",
        disabled && "cursor-none! pointer-events-none!",
        size==="sm" ? 
          "py-2 px-3" : 
        size==="md" ? 
          "py-3 px-6": 
        size==="lg" && 
          "py-5 px-10",
        variant==="outline" ? 
          "bg-transparent border border-gray-300 hover:bg-gray-100" : 
        variant ==="contained" ? 
          "hover:bg-gray-300" : 
        variant === "text" ? 
          "bg-transparent hover:underline p-0! text-start" : 
        variant === "pagination" && 
          "p-0! w-8 h-8 font-semibold! bg-transparent border border-gray-300 hover:bg-gray-100 flex items-center justify-center",
        variant === "pagination" && active===true && 
          "text-white! bg-black! border-0!",
        variant === "text" && active===true && 
          "underline"
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
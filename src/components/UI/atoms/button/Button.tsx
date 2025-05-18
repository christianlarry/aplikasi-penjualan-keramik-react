import { cn } from "../../../../utils/classNames"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: "outline" | "contained" | "text",
  size?: "sm" | "md" | "lg",
  children:React.ReactNode
}

const Button = ({
  children,
  size = "md",
  variant = "contained",
  className,
  ...props
}:Props)=>{
  return (
    <button 
      className={cn(
        className,  
        "cursor-pointer rounded-md text-sm font-medium transition-colors outline-0 bg-gray-200",
        size==="sm" ? "py-2 px-3" : size==="md" ? "py-3 px-6": size==="lg" && "py-5 px-10",
        variant==="outline" ? "bg-transparent border border-gray-300 hover:bg-gray-100" : variant ==="contained" ? "hover:bg-gray-300" : variant === "text" && "bg-transparent hover:underline p-2!"
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
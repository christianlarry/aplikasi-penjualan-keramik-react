import { cn } from "../../../../utils/classNames"
import Button from "./Button"

const PrimaryButton = ({
  className,
  children,
  ...props
}:React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button 
      variant="contained" 
      className={cn("bg-white! text-black! uppercase hover:font-semibold hover:bg-gray-100!",className)}
      {...props}
      >
        {children}
    </Button>
  )
}

export default PrimaryButton
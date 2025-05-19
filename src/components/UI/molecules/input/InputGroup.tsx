import { IoAlertCircleOutline } from "react-icons/io5"

interface Props {
  children: React.ReactNode
  errors?:string
  label?:string
}

const InputGroup = ({
  children,
  errors,
  label
}: Props) => {
  
  return (
    <div className="flex flex-col">
      {label &&
        <div>
          <p className="text-sm">{label}</p>
        </div>
      }
      <div>
        {children}
      </div>
      {errors &&
        <div 
          id="err-text" 
          className="flex text-sm items-center gap-1 rounded-2xl"
        >
          <IoAlertCircleOutline className="text-red-700"/>
          <span className="text-black">{errors}</span>
        </div>
      }
    </div>
  )

}

export default InputGroup
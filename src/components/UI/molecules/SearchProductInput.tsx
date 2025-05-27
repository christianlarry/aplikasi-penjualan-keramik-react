import { useLocation, useNavigate } from "react-router"
import Input from "../atoms/input/Input"
import { useEffect, useState } from "react"

const SearchProductInput = ()=>{

  // State
  const [searchValue,setSearchValue] = useState<string>("")

  const navigate = useNavigate()
  const location = useLocation()

  const handleSearchKeydown:React.KeyboardEventHandler<HTMLInputElement> = (e)=>{
    if(e.key === "Enter" && e.currentTarget.value !== ""){
      const searchParams = new URLSearchParams(location.search)

      searchParams.delete("search")

      searchParams.append("search",e.currentTarget.value)

      navigate("/product-catalog?"+searchParams.toString())
    }
  }

  const handleSearchChange:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    const keyword = e.currentTarget.value

    setSearchValue(keyword)

    if(keyword.length === 0 && location.pathname === "/product-catalog"){

      const searchParams = new URLSearchParams(location.search)
      searchParams.delete("search")

      navigate("/product-catalog?"+searchParams.toString())
    }
  }

  // SET Search Value State from Search Params

  useEffect(()=>{
    const searchParams = new URLSearchParams(location.search)

    setSearchValue(searchParams.get("search") || "")
  },[location])

  return (
    <Input type="search" placeholder="Cari ubin..." onKeyDown={handleSearchKeydown} onChange={handleSearchChange} value={searchValue}/>
  )
}

export default SearchProductInput
import {  useEffect, useState } from "react"
import { Select, type SelectOption } from "../atoms/input/Select"
import InputGroup from "../molecules/input-group/InputGroup"
import ProductCard from "../molecules/card/ProductCard"
import Pagination from "../molecules/pagination/Pagination"
import { getProductFilterOptions, getProducts } from "../../../api/api"
import { httpQuery } from "../../../utils/httpQuery"
import { useLocation, useNavigate } from "react-router"

const ProductCatalog = () => {

  // Pagination states
  const [paginationPage, setPaginationPage] = useState<number>(1)

  // Search states
  const [searchKeyword,setSearchKeyword] = useState<string>()

  // Filter states
  const [designFilter, setDesignFilter] = useState<SelectOption[] | null>(null)
  const [applicationFilter, setApplicationFilter] = useState<SelectOption[] | null>(null)
  const [textureFilter, setTextureFilter] = useState<SelectOption[] | null>(null)
  const [finishingFilter, setFinishingFilter] = useState<SelectOption[] | null>(null)
  const [colorFilter, setColorFilter] = useState<SelectOption[] | null>(null)
  const [sizeFilter, setSizeFilter] = useState<SelectOption[] | null>(null)

  const filterArrToQuery = (key:string, filter:SelectOption[])=>{
    return filter.map(val=>({
      key: key,
      value: val.value
    }))
  }

  // API call
  const productQuery = httpQuery(
      {
        key: "pagination_size",
        value: 12
      },
      {
        key: "pagination_page",
        value: paginationPage
      },
      ...(designFilter ? filterArrToQuery("design", designFilter): []),
      ...(applicationFilter ? filterArrToQuery("application", applicationFilter): []),
      ...(textureFilter ? filterArrToQuery("texture", textureFilter): []),
      ...(finishingFilter ? filterArrToQuery("finishing", finishingFilter): []),
      ...(colorFilter ? filterArrToQuery("color", colorFilter): []),
      ...(sizeFilter ? filterArrToQuery("size", sizeFilter): []),
      searchKeyword ? {key:"search",value: searchKeyword}:undefined
    )

  const getProductsResult = getProducts(productQuery,{revalidateOnFocus: false})
  const getProductFilterOptionsResult = getProductFilterOptions()

  // Location
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{

    const searchParams = new URLSearchParams(location.search)

    // Check Filter Field in Search Params, set state setelah itu
    setFilterState(searchParams,setApplicationFilter,"application")
    setFilterState(searchParams,setDesignFilter,"design")
    setFilterState(searchParams,setFinishingFilter,"finishing")
    setFilterState(searchParams,setTextureFilter,"texture")
    setFilterState(searchParams,setColorFilter,"color")
    setFilterState(searchParams,setSizeFilter,"size")

    // Check search query
    if(searchParams.has("search")){
      setSearchKeyword(searchParams.get("search") || undefined)
    }

  },[location])

  const setFilterState = (searchParams:URLSearchParams,setter:React.Dispatch<React.SetStateAction<SelectOption[]|null>>,key:string)=>{
    if(searchParams.has(key)){
      const filterParams = searchParams.getAll(key)
      
      setter(filterParams.map(val=>({label:val,value:val})))
    }else{
      setter(null)
    }
  }

  // Set Search Query for Filter Options
  const setFilterSearchParams = (key:string,filterOptions:SelectOption[]|null)=>{
    
    const searchParams = new URLSearchParams(location.search)

    searchParams.delete(key)

    if(filterOptions && filterOptions.length > 0){
      filterOptions.forEach(val=>{
        searchParams.append(key,val.value)
      })
    }else{  
      searchParams.delete(key)
    }

    navigate("/product-catalog?"+searchParams.toString())
  }


  return (
    <div className="flex flex-col gap-4">

      {getProductFilterOptionsResult.data &&
      <div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <InputGroup label="Pengaplikasian">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "application")[0].options || []}
              value={applicationFilter}
              onChange={(value) => setFilterSearchParams("application",value as SelectOption[] | null)}
              placeholder="Pilih Lantai/Dinding"
            />
          </InputGroup>
          <InputGroup label="Desain">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "design")[0].options || []}
              value={designFilter}
              onChange={(value) => setFilterSearchParams("design",value as SelectOption[] | null)}
              placeholder="Pilih Desain"
            />
          </InputGroup>
          <InputGroup label="Tekstur">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "texture")[0].options || []}
              value={textureFilter}
              onChange={(value) => setFilterSearchParams("texture",value as SelectOption[] | null)}
              placeholder="Pilih Tekstur"
            />
          </InputGroup>
          <InputGroup label="Sentuhan Akhir">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "finishing")[0].options || []}
              value={finishingFilter}
              onChange={(value) => setFilterSearchParams("finishing",value as SelectOption[] | null)}
              placeholder="Pilih Sentuhan Akhir"
            />
          </InputGroup>
          <InputGroup label="Warna">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "color")[0].options || []}
              value={colorFilter}
              onChange={(value) => setFilterSearchParams("color",value as SelectOption[] | null)}
              placeholder="Pilih Warna"
            />
          </InputGroup>
          <InputGroup label="Ukuran">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "size")[0].options || []}
              value={sizeFilter}
              onChange={(value)=>setFilterSearchParams("size",value as SelectOption[] | null)}
              placeholder="Pilih Ukuran"
            />
          </InputGroup>
        </div>
      </div>
      }

      <div>
        {getProductsResult.data &&
          <p className="text-sm text-gray-500">Menampilkan {getProductsResult.data.data.length} dari {getProductsResult.data.page.total} produk</p>
        }
      </div>

      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {getProductsResult.data && getProductsResult.data.data.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      {getProductsResult.data &&
        <Pagination
          currentPage={getProductsResult.data.page.current}
          totalPages={getProductsResult.data.page.totalPages}
          onPageChange={(page) => setPaginationPage(page)}
        />
      }

    </div>
  )
}

export default ProductCatalog
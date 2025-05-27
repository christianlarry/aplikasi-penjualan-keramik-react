import {  useEffect, useState } from "react"
import { Select, type SelectOption } from "../atoms/input/Select"
import InputGroup from "../molecules/input-group/InputGroup"
import ProductCard from "../molecules/card/ProductCard"
import Pagination from "../molecules/pagination/Pagination"
import { getProductFilterOptions, getProducts } from "../../../api/api"
import { httpQuery } from "../../../utils/httpQuery"
import { useLocation, useNavigate } from "react-router"

const filterOptionsConfig = [
  {
    label: "Pengaplikasian",
    key: "application",
    placeholder: "Pilih Lantai/Dinding"
  },
  {
    label: "Desain",
    key: "design",
    placeholder: "Pilih desain"
  },
  {
    label: "Tekstur",
    key: "texture",
    placeholder: "Pilih tekstur"
  },
  {
    label: "Sentuhan Akhir",
    key: "finishing",
    placeholder: "Pilih sentuhan akhir"
  },
  {
    label: "Warna",
    key: "color",
    placeholder: "Pilih warna"
  },
  {
    label: "Ukuran",
    key: "size",
    placeholder: "Pilih ukuran"
  },
]

const ProductCatalog = () => {

  // Pagination states
  const [paginationPage, setPaginationPage] = useState<number>(1)

  // Search states
  const [searchKeyword,setSearchKeyword] = useState<string>()

  // Filter states
  const [filters,setFilters] = useState<Record<string, SelectOption[]|null>>({
    design: null,
    application: null,
    texture: null,
    finishing: null,
    color: null,
    size: null
  })

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
      ...(filters.design ? filterArrToQuery("design", filters.design): []),
      ...(filters.application ? filterArrToQuery("application", filters.application): []),
      ...(filters.texture ? filterArrToQuery("texture", filters.texture): []),
      ...(filters.finishing ? filterArrToQuery("finishing", filters.finishing): []),
      ...(filters.color ? filterArrToQuery("color", filters.color): []),
      ...(filters.size ? filterArrToQuery("size", filters.size): []),
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
    const filterKeys = ["application","design","finishing","texture","color","size"]

    filterKeys.forEach(key=>{
      if(searchParams.has(key)){
        const filterParams = searchParams.getAll(key)
        
        setFilters(prev=>{
          return {
            ...prev,
            [key]: filterParams.map(val=>({label:val,value:val}))
          }
        })
      }else{
        setFilters(prev=>{
          return {
            ...prev,
            [key]: null
          }
        })
      }
    })

    // Check search query
    setSearchKeyword(searchParams.get("search") || undefined)

  },[location])

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
          {filterOptionsConfig.map(config=>(
            <InputGroup label={config.label}>
              <Select
                multiple
                options={getProductFilterOptionsResult.data?.data.filter(val => val.type === config.key)[0].options || []}
                value={filters[config.key]}
                onChange={(value) => setFilterSearchParams(config.key,value as SelectOption[] | null)}
                placeholder={config.placeholder}
              />
            </InputGroup>
          ))}
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
import {  useState } from "react"
import { Select, type SelectOption } from "../atoms/input/Select"
import InputGroup from "../molecules/input-group/InputGroup"
import ProductCard from "../molecules/card/ProductCard"
import Pagination from "../molecules/pagination/Pagination"
import { getProductFilterOptions, getProducts } from "../../../api/api"
import { httpQuery } from "../../../utils/httpQuery"

const ProductCatalog = () => {

  // Pagination states
  const [paginationPage, setPaginationPage] = useState<number>(1)

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
    )

  const getProductsResult = getProducts(productQuery,{revalidateOnFocus: false})
  const getProductFilterOptionsResult = getProductFilterOptions()

  // Event handler
  // const handleSelectSizeChange = (value:SelectOption|SelectOption[]|null) => {
  //   if (!value) {
  //     setSizeHeightFilter(null)
  //     setSizeWidthFilter(null)
  //     return
  //   }

  //   const selected = value as SelectOption[]

  //   const selectedSizeArr = selected.value.split("x")

  //   setSizeWidthFilter({
  //     label: selectedSizeArr[0],
  //     value: selectedSizeArr[0]
  //   })
  //   setSizeHeightFilter({
  //     label: selectedSizeArr[1],
  //     value: selectedSizeArr[1]
  //   })
  // }

  return (
    <div className="flex flex-col gap-4">

      {getProductFilterOptionsResult.data &&
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <InputGroup label="Pengaplikasian">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "application")[0].options || []}
              value={applicationFilter}
              onChange={(value) => setApplicationFilter(value as SelectOption[] | null)}
              placeholder="Pilih Lantai/Dinding"
            />
          </InputGroup>
          <InputGroup label="Desain">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "design")[0].options || []}
              value={designFilter}
              onChange={(value) => setDesignFilter(value as SelectOption[] | null)}
              placeholder="Pilih Desain"
            />
          </InputGroup>
          <InputGroup label="Tekstur">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "texture")[0].options || []}
              value={textureFilter}
              onChange={(value) => setTextureFilter(value as SelectOption[] | null)}
              placeholder="Pilih Tekstur"
            />
          </InputGroup>
          <InputGroup label="Sentuhan Akhir">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "finishing")[0].options || []}
              value={finishingFilter}
              onChange={(value) => setFinishingFilter(value as SelectOption[] | null)}
              placeholder="Pilih Sentuhan Akhir"
            />
          </InputGroup>
          <InputGroup label="Warna">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "color")[0].options || []}
              value={colorFilter}
              onChange={(value) => setColorFilter(value as SelectOption[] | null)}
              placeholder="Pilih Warna"
            />
          </InputGroup>
          <InputGroup label="Ukuran">
            <Select
              multiple
              options={getProductFilterOptionsResult.data.data.filter(val => val.type === "size")[0].options || []}
              value={sizeFilter}
              onChange={(value)=>setSizeFilter(value as SelectOption[] | null)}
              placeholder="Pilih Ukuran"
            />
          </InputGroup>
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
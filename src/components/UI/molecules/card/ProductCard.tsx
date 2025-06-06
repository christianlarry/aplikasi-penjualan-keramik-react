import type { Product } from "../../../../interface/productInterfaces"
import Button from "../../atoms/button/Button"

import ProductPlaceholderImg from "../../../../assets/images/placeholders/placeholder.svg"
import { formatRupiah } from "../../../../utils/currencyFormat"
import ProductDetail from "../popup/ProductDetail"
import { useState } from "react"
import { getProductImgUrl } from "../../../../utils/getProductImgUrl"

interface Props{
  product:Product
}

const ProductCard = ({
  product
}:Props)=>{

  const [isDetailPopupOpen,setIsDetailPopupOpen] = useState<boolean>(false)

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-background transition-all hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image ? getProductImgUrl(product.image) : ProductPlaceholderImg}
          alt={product.name}
          className="object-cover object-center transition-transform group-hover:scale-105 w-full"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="mt-1 text-sm text-muted-foreground">Ukuran: {product.specification.size.width} x {product.specification.size.height} cm</div>
        <div className="mt-auto pt-4 flex items-center justify-between flex-wrap">
            {product.discount &&
              <div className="flex flex-col">
                <div className="text-sm line-through">Rp{formatRupiah(product.price)}</div>
                <div className="font-medium">Rp{formatRupiah(product.finalPrice)} <span className="text-red-500 text-sm">({product.discount}%)</span></div>
              </div>
            }
            {!product.discount &&
            <div className="font-medium">Rp{formatRupiah(product.price)}</div>
            }
          <Button variant="outline" size="sm" onClick={() => setIsDetailPopupOpen(!isDetailPopupOpen)}>
            Details
          </Button>
        </div>
      </div>

      <ProductDetail product={product} isOpen={isDetailPopupOpen} onClose={()=>setIsDetailPopupOpen(false)}/>
    </div>
)}

export default ProductCard
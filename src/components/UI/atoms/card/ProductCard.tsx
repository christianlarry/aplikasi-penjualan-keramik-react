import type { Product } from "../../../../interface/productInterfaces"
import Button from "../button/Button"

import ProductPlaceholderImg from "../../../../assets/images/placeholders/product-placeholder.png"

interface Props{
  product:Product
  onClick?:(product:Product)=>void
}

const ProductCard = ({
  product,
  onClick
}:Props)=>{
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-background transition-all hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image || ProductPlaceholderImg}
          alt={product.name}
          className="object-cover object-center transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="mt-1 text-sm text-muted-foreground">Size(cm): {product.size.width}x{product.size.height}</div>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="font-medium">Rp{product.price.toFixed(2)}</div>
          <Button variant="outline" size="sm" onClick={() => onClick && onClick(product)}>
            Details
          </Button>
        </div>
      </div>
    </div>
)}

export default ProductCard
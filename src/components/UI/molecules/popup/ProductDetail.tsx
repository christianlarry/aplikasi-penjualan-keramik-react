import type { Product } from "../../../../interface/productInterfaces"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../../atoms/modal/Modal"

import ProductPlaceholderImg from "../../../../assets/images/placeholders/product-placeholder.png"
import { formatRupiah } from "../../../../utils/currencyFormat"
import Button from "../../atoms/button/Button"

interface Props{
  product:Product
  isOpen:boolean
  onClose:()=>void
}

const ProductDetail = ({
  product,
  isOpen,
  onClose
}:Props)=>{

  

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalHeader onClose={onClose}>{product.name}</ModalHeader>
      <ModalBody>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-md">
            <img src={product.image || ProductPlaceholderImg} alt={product.name} className="object-cover w-full object-center" />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Size</h4>
              <p>{product.size.width} x {product.size.height} cm</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Price</h4>
              <p className="text-xl font-medium">Rp{formatRupiah(product.price)}</p>
            </div>                            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Specifications</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Design: {product.design}</li>
                <li>Texture: {product.texture}</li>
                <li>Finishing: {product.finishing}</li>
                <li>Color: {product.color}</li>
                <li>Brand: {product.brand}</li>
              </ul>
            </div>
            {/* <div>
              <h4 className="text-sm font-medium text-gray-500">Description</h4>
              <p className="text-sm">{product.description}</p>
            </div> */}
            {/* {product.recommended && product.recommended.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-500">Recommended For</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  {product.recommended.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose} variant="outline" size="sm">
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ProductDetail
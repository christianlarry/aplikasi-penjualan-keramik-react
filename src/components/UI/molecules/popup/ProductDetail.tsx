import type { Product } from "../../../../interface/productInterfaces"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../../atoms/modal/Modal"

import ProductPlaceholderImg from "../../../../assets/images/placeholders/product-placeholder.png"
import { formatRupiah } from "../../../../utils/currencyFormat"
import Button from "../../atoms/button/Button"
import { getProductImgUrl } from "../../../../utils/getProductImgUrl"

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
            <img src={product.image ? getProductImgUrl(product.image) : ProductPlaceholderImg} alt={product.name} className="object-cover w-full object-center" />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Ukuran</h4>
              <p>{product.specification.size.width} x {product.specification.size.height} cm</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Harga</h4>
              <p className="text-xl font-medium">Rp{formatRupiah(product.price)}</p>
            </div>                            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Merk</h4>
              <p className="text-md font-medium">{product.brand}</p>
            </div>                            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Spesifikasi</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Pengaplikasian: {product.specification.application.join(", ")}</li>
                <li>Desain: {product.specification.design}</li>
                <li>Tekstur: {product.specification.texture}</li>
                <li>Sentuhan Akhir: {product.specification.finishing}</li>
                <li>Warna: {product.specification.color.join(", ")}</li>
                <li>Anti Air: {product.specification.isWaterResistant?"Ya":"Tidak"}</li>
                <li>Anti Selip: {product.specification.isSlipResistant?"Ya":"Tidak"}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Deskripsi</h4>
              <p className="text-sm">{product.description || "-"}</p>
            </div>
            {product.recommended &&
              <div>
                <h4 className="text-sm font-medium text-gray-500">Rekomendasi Untuk</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  {product.recommended.map(recommended=>(
                    <li key={recommended}>{recommended}</li>
                  ))}
                </ul>
              </div>
            }
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
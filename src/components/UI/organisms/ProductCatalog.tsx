import { useState } from "react"
import { Select, type SelectOption } from "../atoms/input/Select"
import InputGroup from "../molecules/input/InputGroup"
import ProductCard from "../molecules/card/ProductCard"

// Filter options
const designOptions: SelectOption[] = [
  { value: "modern", label: "Modern" },
  { value: "classic", label: "Classic" },
  { value: "geometric", label: "Geometric" },
  { value: "floral", label: "Floral" },
  { value: "minimalist", label: "Minimalist" },
]

const textureOptions: SelectOption[] = [
  { value: "smooth", label: "Smooth" },
  { value: "matte", label: "Matte" },
  { value: "glossy", label: "Glossy" },
  { value: "textured", label: "Textured" },
  { value: "rustic", label: "Rustic" },
]

const finishingOptions: SelectOption[] = [
  { value: "polished", label: "Polished" },
  { value: "honed", label: "Honed" },
  { value: "brushed", label: "Brushed" },
  { value: "lappato", label: "Lappato" },
  { value: "natural", label: "Natural" },
]

const colorOptions: SelectOption[] = [
  { value: "white", label: "White" },
  { value: "beige", label: "Beige" },
  { value: "gray", label: "Gray" },
  { value: "black", label: "Black" },
  { value: "brown", label: "Brown" },
  { value: "blue", label: "Blue" },
]

const sizeOptions: SelectOption[] = [
  { value: "30x30", label: "30 x 30 cm" },
  { value: "60x60", label: "60 x 60 cm" },
  { value: "60x120", label: "60 x 120 cm" },
  { value: "80x80", label: "80 x 80 cm" },
  { value: "100x100", label: "100 x 100 cm" },
]

const ProductCatalog = ()=>{
  // Filter states
  const [designFilter, setDesignFilter] = useState<SelectOption | null>(null)
  const [textureFilter, setTextureFilter] = useState<SelectOption | null>(null)
  const [finishingFilter, setFinishingFilter] = useState<SelectOption | null>(null)
  const [colorFilter, setColorFilter] = useState<SelectOption | null>(null)
  const [sizeFilter, setSizeFilter] = useState<SelectOption | null>(null)
  
  return (
    <div className="flex flex-col gap-4">

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <InputGroup label="Design">
          <Select
            options={designOptions}
            value={designFilter}
            onChange={(value) => setDesignFilter(value as SelectOption | null)}
            placeholder="Select Design"
          />
        </InputGroup>
        <InputGroup label="Texture">
          <Select
          options={textureOptions}
          value={textureFilter}
          onChange={(value) => setTextureFilter(value as SelectOption | null)}
          placeholder="Select Texture"
          />
        </InputGroup>
        <InputGroup label="Finishing">
          <Select
          options={finishingOptions}
          value={finishingFilter}
          onChange={(value) => setFinishingFilter(value as SelectOption | null)}
          placeholder="Select Finishing"
        />
        </InputGroup>
        <InputGroup label="Color">
          <Select
            options={colorOptions}
            value={colorFilter}
            onChange={(value) => setColorFilter(value as SelectOption | null)}
            placeholder="Select Color"
          />
        </InputGroup>
        <InputGroup label="Size">
          <Select
          options={sizeOptions}
          value={sizeFilter}
          onChange={(value) => setSizeFilter(value as SelectOption | null)}
          placeholder="Select Size"
        />
        </InputGroup>
      </div>

      <div>
        <p className="text-sm">Showing 12 of 12 products</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <ProductCard
          product={{
            "_id": "67de49c5bda24e33b1a9ed0b",
            "name": "Wooden Texture Ceramic",
            "type": "Wall",
            "design": "Wood",
            "size": {
                "width": 30,
                "height": 60
            },
            "color": "Brown",
            "finishing": "Glossy",
            "texture": "Textured",
            "brand": "Granito",
            "price": 60000,
            "createdAt": "2025-05-08T08:51:21.403Z",
            "updatedAt": "2025-05-08T08:51:21.403Z"
          }}
        />
        <ProductCard
          product={{
            "_id": "67de49c5bda24e33b1a9ed0b",
            "name": "Wooden Texture Ceramic",
            "type": "Wall",
            "design": "Wood",
            "size": {
                "width": 30,
                "height": 60
            },
            "color": "Brown",
            "finishing": "Glossy",
            "texture": "Textured",
            "brand": "Granito",
            "price": 60000,
            "createdAt": "2025-05-08T08:51:21.403Z",
            "updatedAt": "2025-05-08T08:51:21.403Z"
          }}
        />
        <ProductCard
          product={{
            "_id": "67de49c5bda24e33b1a9ed0b",
            "name": "Wooden Texture Ceramic",
            "type": "Wall",
            "design": "Wood",
            "size": {
                "width": 30,
                "height": 60
            },
            "color": "Brown",
            "finishing": "Glossy",
            "texture": "Textured",
            "brand": "Granito",
            "price": 60000,
            "createdAt": "2025-05-08T08:51:21.403Z",
            "updatedAt": "2025-05-08T08:51:21.403Z"
          }}
        />
        <ProductCard
          product={{
            "_id": "67de49c5bda24e33b1a9ed0b",
            "name": "Wooden Texture Ceramic",
            "type": "Wall",
            "design": "Wood",
            "size": {
                "width": 30,
                "height": 60
            },
            "color": "Brown",
            "finishing": "Glossy",
            "texture": "Textured",
            "brand": "Granito",
            "price": 60000,
            "createdAt": "2025-05-08T08:51:21.403Z",
            "updatedAt": "2025-05-08T08:51:21.403Z"
          }}
        />
      </div>
    </div>
  )
}

export default ProductCatalog
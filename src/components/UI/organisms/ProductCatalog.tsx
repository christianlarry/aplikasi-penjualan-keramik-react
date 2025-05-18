import { useState } from "react"
import { Select, type SelectOption } from "../atoms/input/Select"
import InputGroup from "../molecules/input/InputGroup"

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
    <div>
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
    </div>
  )
}

export default ProductCatalog
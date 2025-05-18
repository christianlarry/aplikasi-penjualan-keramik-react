import { useState } from "react"
import { Select, type SelectOption } from "../atoms/input/Select"

// Filter options
const designOptions: SelectOption[] = [
  { value: "all", label: "All Designs" },
  { value: "modern", label: "Modern" },
  { value: "classic", label: "Classic" },
  { value: "geometric", label: "Geometric" },
  { value: "floral", label: "Floral" },
  { value: "minimalist", label: "Minimalist" },
]

const textureOptions: SelectOption[] = [
  { value: "all", label: "All Textures" },
  { value: "smooth", label: "Smooth" },
  { value: "matte", label: "Matte" },
  { value: "glossy", label: "Glossy" },
  { value: "textured", label: "Textured" },
  { value: "rustic", label: "Rustic" },
]

const finishingOptions: SelectOption[] = [
  { value: "all", label: "All Finishings" },
  { value: "polished", label: "Polished" },
  { value: "honed", label: "Honed" },
  { value: "brushed", label: "Brushed" },
  { value: "lappato", label: "Lappato" },
  { value: "natural", label: "Natural" },
]

const colorOptions: SelectOption[] = [
  { value: "all", label: "All Colors" },
  { value: "white", label: "White" },
  { value: "beige", label: "Beige" },
  { value: "gray", label: "Gray" },
  { value: "black", label: "Black" },
  { value: "brown", label: "Brown" },
  { value: "blue", label: "Blue" },
]

const sizeOptions: SelectOption[] = [
  { value: "all", label: "All Sizes" },
  { value: "30x30", label: "30 x 30 cm" },
  { value: "60x60", label: "60 x 60 cm" },
  { value: "60x120", label: "60 x 120 cm" },
  { value: "80x80", label: "80 x 80 cm" },
  { value: "100x100", label: "100 x 100 cm" },
]

const ProductCatalog = ()=>{
  // Filter states
  const [designFilter, setDesignFilter] = useState<SelectOption | null>({ value: "all", label: "All Designs" })
  const [textureFilter, setTextureFilter] = useState<SelectOption | null>({ value: "all", label: "All Textures" })
  const [finishingFilter, setFinishingFilter] = useState<SelectOption | null>({ value: "all", label: "All Finishings" })
  const [colorFilter, setColorFilter] = useState<SelectOption | null>({ value: "all", label: "All Colors" })
  const [sizeFilter, setSizeFilter] = useState<SelectOption | null>({ value: "all", label: "All Sizes" })
  
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        <Select
          options={designOptions}
          value={designFilter}
          onChange={(value) => setDesignFilter(value as SelectOption | null)}
          placeholder="Design"
        />
        <Select
          options={textureOptions}
          value={textureFilter}
          onChange={(value) => setTextureFilter(value as SelectOption | null)}
          placeholder="Texture"
        />
        <Select
          options={finishingOptions}
          value={finishingFilter}
          onChange={(value) => setFinishingFilter(value as SelectOption | null)}
          placeholder="Finishing"
        />
        <Select
          options={colorOptions}
          value={colorFilter}
          onChange={(value) => setColorFilter(value as SelectOption | null)}
          placeholder="Color"
        />
        <Select
          options={sizeOptions}
          value={sizeFilter}
          onChange={(value) => setSizeFilter(value as SelectOption | null)}
          placeholder="Size"
        />
      </div>
    </div>
  )
}

export default ProductCatalog
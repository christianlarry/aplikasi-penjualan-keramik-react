import type { BreadcrumbsItem } from "../../../UI/molecules/navigation/Breadcrumbs"
import Breadcrumbs from "../../../UI/molecules/navigation/Breadcrumbs"
import CatalogHero from "../../../UI/organisms/CatalogHero"
import ProductCatalog from "../../../UI/organisms/ProductCatalog"

const breadcrumbsItems: BreadcrumbsItem[] = [
  {
    label: "Beranda",
    url: "/"
  },
  {
    label: "Katalog",
    url: "/catalog"
  },
  {
    label: "Produk Diskon",
    url: "/catalog/discount"
  }
]

const DiscountPage = () => {
  return (
    <div className="flex flex-col gap-8 mt-1">
      <section>
        <div>
          {/* Ini adalah Banner/Hero */}
          <CatalogHero
            title="Promo & Diskon Spesial"
            description="Dapatkan keramik berkualitas dengan harga spesial! Jangan lewatkan penawaran terbatas untuk mempercantik rumah tanpa bikin dompet bolong."
            imageSrc="https://images.unsplash.com/photo-1708540084677-dc5838b37627?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          {/* Ini adalah Breadcrumbs */}
          <div className="my-8">
            <Breadcrumbs items={breadcrumbsItems} />
          </div>
        </div>
      </section>

      <section>
        <ProductCatalog />
      </section>
    </div>
  )
}

export default DiscountPage
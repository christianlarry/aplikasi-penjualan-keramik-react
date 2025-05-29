import Main from "../../../UI/molecules/container/Main"
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
    label: "Produk Terbaru",
    url: "/catalog/new-arrivals"
  }
]

const NewArrivalsPage = () => {
  return (
    <>
      <CatalogHero
        title="Produk Terbaru"
        description="Lihat koleksi keramik terbaru kami dengan desain modern dan inovatif yang siap mempercantik ruanganmu. Langsung cek biar gak ketinggalan tren!"
        imageSrc="https://images.unsplash.com/photo-1708540084677-dc5838b37627?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <div className="px-5 mt-4 mb-8">
        <Breadcrumbs items={breadcrumbsItems} />
      </div>

      <Main>
        <section>
          <ProductCatalog />
        </section>
      </Main>
    </>
  )
}

export default NewArrivalsPage
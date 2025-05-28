
import ProductCatalog from "../../UI/organisms/ProductCatalog";
import Breadcrumbs, { type BreadcrumbsItem } from "../../UI/molecules/navigation/Breadcrumbs";
import CatalogHero from "../../UI/organisms/CatalogHero";

const otherProductCatalogLinks = [
  {
    url: "/catalog/discount",
    label: "Sedang Diskon"
  },
  {
    url: "/catalog/new-arrivals",
    label: "Produk Terbaru"
  },
  {
    url: "/catalog/best-seller",
    label: "Produk Terlaris"
  }
]

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
    label: "Semua Produk",
    url: "/catalog/all-products"
  }
]

const CatalogPage = () => {
  return (
    <div className="flex flex-col gap-8 mt-1">
      <section>
        <div>
          {/* Ini adalah Banner/Hero */}
          <CatalogHero
            title="Katalog Ubin Keramik"
            description="Jelajahi pilihan ubin keramik terbaik kami untuk menghadirkan sentuhan elegan dan kualitas tinggi ke setiap sudut ruangan Anda."
            imageSrc="https://images.unsplash.com/photo-1708540084677-dc5838b37627?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            otherLinks={otherProductCatalogLinks}
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
  );
}

export default CatalogPage
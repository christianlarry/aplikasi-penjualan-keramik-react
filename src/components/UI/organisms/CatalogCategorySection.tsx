import CatalogCategoryCard from "../molecules/card/CatalogCategoryCard"

const catalogCategoryCards = [
  { title: "Semua Produk", url: "/catalog/all-products", imgSrc: "https://s7d1.scene7.com/is/image/TileShop/484942_51_REN:3x2?fmt=webp" },
  { title: "Ubin Terlaris", url: "/catalog/best-seller", imgSrc: "https://s7d1.scene7.com/is/image/TileShop/Homepage_May2025_BestSellers:3x2?fmt=webp" },
  { title: "Produk Baru", url: "/catalog/new-arrivals", imgSrc: "https://s7d1.scene7.com/is/image/TileShop/Homepage_May2025_Clearance:3x2?fmt=webp" },
  { title: "Diskon Sampai 70%", url: "/catalog/discount", imgSrc: "https://s7d1.scene7.com/is/image/TileShop/Homepage_May2025_USAMade:3x2?fmt=webp" },
]

const CatalogCategorySection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

      {catalogCategoryCards.map(item => (
        <CatalogCategoryCard
          key={item.title}
          title={item.title}
          url={item.url}
          imgSrc={item.imgSrc}
        />
      ))}

    </div>
  )
}

export default CatalogCategorySection
import RoomCategoryCard from "../molecules/card/RoomCategoryCard"

const catalogRoomCategoryCards = [
  { title: "Dapur", url: "/catalog/all-products?search=dapur", imgSrc: "https://s7d1.scene7.com/is/image/TileShop/683320_render_kitchen_close_up_vertical:1x1?fmt=webp" },
  { title: "Kamar Mandi", url: "/catalog/all-products?search=kamar mandi", imgSrc: "https://s7d1.scene7.com/is/image/TileShop/484940_50_REN:1x1?fmt=webp" },
  { title: "Kamar Tidur", url: "/catalog/all-products?search=kamar tidur", imgSrc: "https://s7d1.scene7.com/is/image/TileShop/FoxHomes_FitFoodie_ Kitchen_Vertical_V2:1x1?fmt=webp" },
  { title: "Ruang Tamu", url: "/catalog/all-products?search=ruang tamu", imgSrc: "https://s7d1.scene7.com/is/image/TileShop/Eve_A_Main_CZ:1x1?fmt=webp" },
  { title: "Ruang Keluarga", url: "/catalog/all-products?search=ruang keluarga", imgSrc: "https://s7d1.scene7.com/is/image/TileShop/AMB_TRUEWOOD_Taupe_23x120:1x1?fmt=webp" },
  { title: "Luar Ruangan", url: "/catalog/all-products?search=luar ruangan", imgSrc: "https://s7d1.scene7.com/is/image/TileShop/Timber_Trails_Napa_Laundry_001:1x1?fmt=webp" }
]

const CatalogRoomCategorySection = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <div>
        <h2 className="text-2xl text-center">Produk Berdasarkan Tempat</h2>
      </div>

      <div className="gap-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

        {catalogRoomCategoryCards.map(item => (
          <RoomCategoryCard
            key={item.title}
            name={item.title}
            imgSrc={item.imgSrc}
            url={item.url}
          />
        ))}

      </div>
    </div>
  )
}

export default CatalogRoomCategorySection
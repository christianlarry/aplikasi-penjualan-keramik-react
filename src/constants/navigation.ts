import type { IconType } from "react-icons"
import { LuCalculator, LuGrid2X2, LuHouse, LuPercent, LuShoppingCart, LuSparkles, LuStar } from "react-icons/lu"

export interface NavigationItem {
  name: string,
  description?: string,
  path: string,
  Icon: IconType,
  children?: NavigationItem[]
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    name: "Beranda",
    path: "/",
    Icon: LuHouse
  },
  {
    name: "Katalog",
    path: "/catalog",
    Icon: LuShoppingCart,
    children: [
      {
        name: "Semua Produk",
        description: "Lihat seluruh koleksi ubin yang tersedia di toko kami.",
        path: "/all-products",
        Icon: LuGrid2X2
      },
      {
        name: "Ubin Terlaris",
        description: "Temukan ubin yang paling banyak dibeli pelanggan.",
        path: "/best-seller",
        Icon: LuStar
      },
      {
        name: "Produk Terbaru",
        description: "Cek ubin terbaru yang baru saja rilis di toko.",
        path: "/new-arrivals",
        Icon: LuSparkles
      },
      {
        name: "Sedang Diskon",
        description: "Lihat ubin-ubin dengan harga promo spesial.",
        path: "/discount",
        Icon: LuPercent
      }
    ]
  },
  {
    name: "Kalkulator Ubin",
    path: "/tile-calculator",
    Icon: LuCalculator
  }
]
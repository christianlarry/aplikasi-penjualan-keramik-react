import bisnisStrings from "./bisnis.strings"

const pagesConfig = {
  homePage: {
    heroTitle: "CV. Aneka Keramik",
    heroDescription: "Temukan berbagai pilihan ubin keramik berkualitas tinggi untuk mempercantik rumah dan bangunan Anda. CV Aneka Keramik siap memenuhi kebutuhan interior dan eksterior Anda.",
    heroLinks: [
      { label: "Menu Katalog", url: "/catalog" },
      { label: "Kunjungi Toko", url: bisnisStrings.location.gMapsLink }
    ],
    catalogCategoryCards: [
      {title:"Semua Produk",url:"/catalog/all-products",imgSrc:"https://s7d1.scene7.com/is/image/TileShop/484942_51_REN:3x2?fmt=webp"},
      {title:"Ubin Terlaris",url:"/catalog/best-seller",imgSrc:"https://s7d1.scene7.com/is/image/TileShop/Homepage_May2025_BestSellers:3x2?fmt=webp"},
      {title:"Produk Baru",url:"/catalog/new-arrivals",imgSrc:"https://s7d1.scene7.com/is/image/TileShop/Homepage_May2025_Clearance:3x2?fmt=webp"},
      {title:"Diskon Sampai 70%",url:"/catalog/discount",imgSrc:"https://s7d1.scene7.com/is/image/TileShop/Homepage_May2025_USAMade:3x2?fmt=webp"},
    ],
    catalogRoomCategoryCards: [
      {title: "Dapur", url: "/catalog/all-products?search=dapur",imgSrc: "https://s7d1.scene7.com/is/image/TileShop/683320_render_kitchen_close_up_vertical:1x1?fmt=webp"},
      {title: "Kamar Mandi", url: "/catalog/all-products?search=kamar mandi",imgSrc: "https://s7d1.scene7.com/is/image/TileShop/484940_50_REN:1x1?fmt=webp"},
      {title: "Kamar Tidur", url: "/catalog/all-products?search=kamar tidur",imgSrc: "https://s7d1.scene7.com/is/image/TileShop/FoxHomes_FitFoodie_ Kitchen_Vertical_V2:1x1?fmt=webp"},
      {title: "Ruang Tamu", url: "/catalog/all-products?search=ruang tamu",imgSrc: "https://s7d1.scene7.com/is/image/TileShop/Eve_A_Main_CZ:1x1?fmt=webp"},
      {title: "Ruang Keluarga", url: "/catalog/all-products?search=ruang keluarga",imgSrc: "https://s7d1.scene7.com/is/image/TileShop/AMB_TRUEWOOD_Taupe_23x120:1x1?fmt=webp"},
      {title: "Luar Ruangan", url: "/catalog/all-products?search=luar ruangan",imgSrc: "https://s7d1.scene7.com/is/image/TileShop/Timber_Trails_Napa_Laundry_001:1x1?fmt=webp"}
    ],
    showcaseTileCalculator:{
      title: "Kalkulasi Jumlah Ubin",
      description: "Butuh bantuan hitung jumlah ubin? Gunakan alat kalkulasi otomatis kami untuk dapatkan estimasi cepat dan akurat sesuai ukuran ruanganmu!",
      linkLabel: "Coba Sekarang",
      linkUrl: "/tile-calculator"
    }
  }
}

export default pagesConfig
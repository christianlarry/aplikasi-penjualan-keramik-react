import bisnisStrings from "./bisnis.strings"

const pagesConfig = {
  homePage: {
    heroTitle: "CV. Aneka Keramik",
    heroDescription: "Temukan berbagai pilihan ubin keramik berkualitas tinggi untuk mempercantik rumah dan bangunan Anda. CV Aneka Keramik siap memenuhi kebutuhan interior dan eksterior Anda.",
    heroLinks: [
      { label: "Menu Katalog", url: "/catalog" },
      { label: "Kunjungi Toko", url: bisnisStrings.location.gMapsLink }
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
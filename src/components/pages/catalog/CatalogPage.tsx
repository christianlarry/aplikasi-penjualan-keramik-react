
import Main from "../../UI/molecules/container/Main";
import Breadcrumbs, { type BreadcrumbsItem } from "../../UI/molecules/navigation/Breadcrumbs";
import CatalogCategorySection from "../../UI/organisms/CatalogCategorySection";
import CatalogRoomCategorySection from "../../UI/organisms/CatalogRoomCategorySection";
import Hero from "../../UI/organisms/Hero";

const breadcrumbsItems: BreadcrumbsItem[] = [
  {
    label: "Beranda",
    url: "/"
  },
  {
    label: "Katalog",
    url: "/catalog"
  }
]

const CatalogPage = () => {
  return (
    <>
      <Hero
        title="Katalog Toko"
        description="Lihat semua koleksi keramik terbaik dari CV Aneka Keramik. Temukan ubin dengan desain menarik dan kualitas unggulan untuk mempercantik setiap sudut ruangan Anda."
        imgSrc="https://plus.unsplash.com/premium_photo-1675745330147-41c50df90244?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <div className="px-5">
        <Breadcrumbs items={breadcrumbsItems} />
      </div>

      <Main>
        <section>
          <CatalogCategorySection/>
        </section>
        <section>
          <CatalogRoomCategorySection/>
        </section>
      </Main>
    </>
  );
}

export default CatalogPage
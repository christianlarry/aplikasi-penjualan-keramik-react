import pagesConfig from "../../../constants/pages.config";
import Main from "../../UI/molecules/container/Main";
import Hero from "../../UI/organisms/Hero";
import CatalogCategoryCard from "../../UI/molecules/card/CatalogCategoryCard";
import ShowcaseBanner from "../../UI/molecules/banner/ShowcaseBanner";
import { Link } from "react-router";
import RoomCategoryCard from "../../UI/molecules/card/RoomCategoryCard";

const HomePage = () => {
  return (
    <>
      <Hero
        title={pagesConfig.homePage.heroTitle}
        description={pagesConfig.homePage.heroDescription}
        links={pagesConfig.homePage.heroLinks}
      />

      <Main className="mt-8">  

        <section>
          <ShowcaseBanner
            title="Kalkulasi Jumlah Ubin"
            description="Butuh bantuan hitung jumlah ubin? Gunakan alat kalkulasi otomatis kami untuk dapatkan estimasi cepat dan akurat sesuai ukuran ruanganmu!"
            link={{
              label: "Coba Sekarang",
              url: "/tile-calculator"
            }}
          />
        </section>

        <section>
          <div className="flex flex-col items-center gap-4">
            <div>
              <h2 className="text-2xl text-center">Produk Berdasarkan Tempat</h2>
            </div>

            <div className="gap-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <RoomCategoryCard
                name="Kitchen"
                imgSrc="https://s7d1.scene7.com/is/image/TileShop/683320_render_kitchen_close_up_vertical:1x1?fmt=webp"
                url="/catalog/"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {pagesConfig.homePage.catalogCategoryCards.map(item=>(
              <CatalogCategoryCard
                title={item.title}
                url={item.url}
                imgSrc={item.imgSrc}
              />
            ))}

          </div>
        </section>
      </Main>
    </>
  );
};

export default HomePage;

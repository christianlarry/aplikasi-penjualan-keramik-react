import pagesConfig from "../../../constants/pages.config";
import Main from "../../UI/molecules/container/Main";
import Hero from "../../UI/organisms/Hero";
import CatalogCategoryCard from "../../UI/molecules/card/CatalogCategoryCard";
import PrimaryButton from "../../UI/atoms/button/PrimaryButton";
import { Link } from "react-router";
import ShowcaseBanner from "../../UI/molecules/banner/ShowcaseBanner";

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

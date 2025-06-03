import pagesConfig from "../../../constants/pages.config";
import Main from "../../UI/molecules/container/Main";
import Hero from "../../UI/organisms/Hero";
import CatalogCategoryCard from "../../UI/molecules/card/CatalogCategoryCard";
import ShowcaseBanner from "../../UI/molecules/banner/ShowcaseBanner";
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
            title={pagesConfig.homePage.showcaseTileCalculator.title}
            description={pagesConfig.homePage.showcaseTileCalculator.description}
            link={{
              label: pagesConfig.homePage.showcaseTileCalculator.linkLabel,
              url: pagesConfig.homePage.showcaseTileCalculator.linkUrl
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

        <section>
          <div className="flex flex-col items-center gap-12">
            <div>
              <h2 className="text-2xl text-center">Produk Berdasarkan Tempat</h2>
            </div>

            <div className="gap-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

              {pagesConfig.homePage.catalogRoomCategoryCards.map(item=>(
                <RoomCategoryCard
                  key={item.title}
                  name={item.title}
                  imgSrc={item.imgSrc}
                  url={item.url}
                />
              ))}

            </div>
          </div>
        </section>

      </Main>
    </>
  );
};

export default HomePage;

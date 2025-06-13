import pagesConfig from "../../../constants/pages.config";
import Main from "../../UI/molecules/container/Main";
import Hero from "../../UI/organisms/Hero";
import ShowcaseBanner from "../../UI/molecules/banner/ShowcaseBanner";
import CatalogCategorySection from "../../UI/organisms/CatalogCategorySection";
import CatalogRoomCategorySection from "../../UI/organisms/CatalogRoomCategorySection";

const HomePage = () => {
  return (
    <>
      <Hero
        imgSrc="https://images.unsplash.com/photo-1708540084677-dc5838b37627?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <CatalogCategorySection/>
        </section>

        <section>
          <CatalogRoomCategorySection/>
        </section>

      </Main>
    </>
  );
};

export default HomePage;

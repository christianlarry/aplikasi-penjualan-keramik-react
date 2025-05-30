import pagesConfig from "../../../constants/pages.config";
import Main from "../../UI/molecules/container/Main";
import Hero from "../../UI/organisms/Hero";
import CatalogCategoryCard from "../../UI/molecules/card/CatalogCategoryCard";

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

import ProductCatalog from "../../UI/organisms/ProductCatalog";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 mt-12">
      <section>
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-4xl font-semibold">Ceramic Tile Collection</h2>
          <p className="text-gray-500">Discover our premium selection of ceramic and porcelain tiles</p>
        </div>
      </section>

      <section>
        <ProductCatalog/>
      </section>
    </div>
  );
};

export default HomePage;

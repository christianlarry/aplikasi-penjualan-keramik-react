import ProductCatalog from "../../UI/organisms/ProductCatalog";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 mt-12">
      <section>
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-4xl font-semibold text-center">Katalog Ubin Keramik</h2>
          <p className="text-gray-500 text-center">Jelajahi pilihan ubin keramik terbaik kami untuk menghadirkan sentuhan elegan dan kualitas tinggi ke setiap sudut ruangan Anda.</p>
        </div>
      </section>

      <section>
        <ProductCatalog/>
      </section>
    </div>
  );
};

export default HomePage;

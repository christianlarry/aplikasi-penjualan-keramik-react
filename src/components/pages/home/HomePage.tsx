import Main from "../../UI/molecules/container/Main";
import Hero from "../../UI/organisms/Hero";

const HomePage = () => {
  return (
    <>
      <Hero
        title="CV. Aneka Keramik"
        description="Temukan berbagai pilihan ubin keramik berkualitas tinggi untuk mempercantik rumah dan bangunan Anda. CV Aneka Keramik siap memenuhi kebutuhan interior dan eksterior Anda."
        links={[
          {
            label: "Lihat Katalog",
            url: "/catalog"
          },
          {
            label: "Kunjungi Toko",
            url: "/catalog"
          }
        ]}
      />

      <Main>  
        <section>
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-4xl font-semibold text-center">CV Aneka Keramik</h2>
            <p className="text-gray-500 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate nisi omnis adipisci odit explicabo voluptatem autem labore tempore aut possimus id sed, totam eos eaque tempora! Aliquid, ea odit!.</p>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-4xl font-semibold text-center">CV Aneka Keramik</h2>
            <p className="text-gray-500 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate nisi omnis adipisci odit explicabo voluptatem autem labore tempore aut possimus id sed, totam eos eaque tempora! Aliquid, ea odit!.</p>
          </div>
        </section>
      </Main>
    </>
  );
};

export default HomePage;


import Breadcrumbs, { type BreadcrumbsItem } from "../../UI/molecules/navigation/Breadcrumbs";
import CatalogHero from "../../UI/organisms/CatalogHero";

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
    <div className="flex flex-col gap-8 mt-1">
      <section>
        <div>
          {/* Ini adalah Banner/Hero */}
          <CatalogHero
            title="CV. Aneka Keramik Katalog"
            description="Jelajahi pilihan ubin keramik terbaik kami untuk menghadirkan sentuhan elegan dan kualitas tinggi ke setiap sudut ruangan Anda."
            imageSrc="https://images.unsplash.com/photo-1708540084677-dc5838b37627?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          {/* Ini adalah Breadcrumbs */}
          <div className="my-8">
            <Breadcrumbs items={breadcrumbsItems} />
          </div>
        </div>
      </section>

      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore omnis eligendi error vero corporis voluptatum numquam nemo nobis porro accusamus distinctio totam rerum asperiores a tempora doloribus quis, ipsum cupiditate, delectus dolore unde suscipit autem. Perferendis ipsa, quidem repudiandae, reiciendis, consectetur obcaecati maiores illum laboriosam culpa aliquid fugit at! Accusamus rerum numquam doloribus, sint, neque veritatis iusto possimus laboriosam ea exercitationem voluptas quae ex adipisci? Distinctio maxime ullam culpa aliquam perspiciatis enim minima repellat vel, iste cumque sunt nam quidem laborum voluptates tempora nesciunt sint ex vitae saepe. Libero ex possimus non veniam iste repellendus cumque, qui perspiciatis fugit.
      </section>
    </div>
  );
}

export default CatalogPage
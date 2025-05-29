
import Breadcrumbs, { type BreadcrumbsItem } from "../../UI/molecules/navigation/Breadcrumbs";

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
import { Region } from "@medusajs/medusa";
import ProductRail from "@modules/home/components/type-products/product-rail";
import { ProductCollectionWithPreviews } from "types/global";

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[];
  region: Region;
}) {
  // Accede al segundo elemento de la lista de colecciones (índice 1)
  const collection = collections[1];

  // Renderiza solo la segunda colección si existe
  return collection ? (
    <li key={collection.id}>
      <ProductRail collection={collection} region={region} />
    </li>
  ) : null;
}

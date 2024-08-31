import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="flex flex-col lg:flex-row content-container py-12 small:py-24 lg:gap-20">
      <div className="flex flex-col mb-8 lg:w-2/5 gap-5">
        <Text className="txt-medium text-xl-semi font-semibold font-archivo">
          {collection.title}
        </Text>
        <p className="font-normal font-sans txt-medium text-gray-500">
          Unveil the ultimate combination of comfort and elegance with Seat
          Studio exclusive collection of accent chairs, sofas, ottomans, and
          stools. Every piece is carefully crafted to provide exceptional
          comfort while enhancing the aesthetic of your space. Discover the
          unique charm of Seat Studio, where sophistication and relaxation
          converge.
        </p>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36 w-full">
        {products &&
          products
            .slice(0, 3)
            .reverse()
            .map((product) => (
              <li key={product.id}>
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
            ))}
      </ul>
    </div>
  )
}

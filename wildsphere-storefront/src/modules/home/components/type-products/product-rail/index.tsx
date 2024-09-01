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
    <div className="flex flex-col lg:flex-row content-container py-24 lg:gap-20">
      <div className="flex flex-col mb-8 lg:w-2/5 gap-5">
        <Text className="txt-medium text-xl-semi font-semibold font-archivo">
          {collection.title}
        </Text>
        <p className="font-normal font-sans txt-medium text-gray-500">
          Discover the perfect blend of style and function with Widsphere&#39;s
          exclusive collection of home decor essentials. From chic accent pieces
          to practical additions, each item is crafted to enhance both the
          comfort and beauty of your space. Experience the unique charm of
          Widsphere, where elegance meets everyday living.
        </p>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>

      <ul className="grid grid-cols-2 gap-x-6 gap-y-24 sm:hidden w-full">
        {products &&
          products
            .slice(0, 2)
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

      <ul className="hidden sm:grid sm:grid-cols-3 gap-x-6 gap-y-36 w-full">
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

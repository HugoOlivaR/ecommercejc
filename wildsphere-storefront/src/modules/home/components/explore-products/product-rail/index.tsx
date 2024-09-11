import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import { ArrrowRight } from "@medusajs/icons"
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
    <div className="flex flex-col content-container py-12 small:py-24">
      <div className="flex flex-col mb-8 gap-5 text-center justify-center items-center">
        <p className="font-normal font-sans  text-gray-700">Lastest Products</p>
        <Text className="text-3xl sm:text-4xl font-archivo leading-tight">
          Our newest styles are here to help <br className="hidden sm:flex" />
          you look your best.
        </Text>

        <a
          href="/collections/merch"
          rel="noopener"
          className="flex gap-2 items-center py-2 border-b-2 border-black hover:border-accent hover:text-accent ease-linear duration-200 font-semibold"
        >
          Explore Products
          <ArrrowRight />
        </a>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-6 gap-y-24 small:gap-y-36 w-full">
        {products &&
          products
            .slice(0, 4)
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

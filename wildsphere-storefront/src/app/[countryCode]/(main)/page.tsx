import { Product } from "@medusajs/medusa"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import TypeProducts from "@modules/home/components/type-products"
import OneProduct from "@modules/home/components/one-product"
import ExploreProducts from "@modules/home/components/explore-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"

export const metadata = {
  title: "Widsphere - Home Decor & Everyday Essentials",
  template: "%s | WILDSPHERE",
  description:
    "Discover Widsphere, your go-to online store for stylish and functional home decor essentials. Shop small, everyday items that bring comfort and convenience to your home.",
  keywords:
    "home interior, furniture, decor, accessories, stylish home, premium products",
  canonical: "https://wildsg.com/",
  robots: "index, follow",
  publisher: "WildSphere Inc.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <TypeProducts collections={collections} region={region} />
          <OneProduct imageUrl="/imgs/modernCouch.webp" altText="Couch Image" />
          <ExploreProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}

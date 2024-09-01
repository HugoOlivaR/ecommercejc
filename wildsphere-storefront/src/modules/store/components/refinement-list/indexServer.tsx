// RefinementListServer.tsx (Server Component)
import { getCollectionsList } from "@lib/data"
import RefinementList from "./index"
import { SortOptions } from "./sort-products"

interface RefinementListServerProps {
  sortBy: SortOptions
  dataTestId?: string
}

export default async function RefinementListServer({
  sortBy,
  dataTestId,
}: RefinementListServerProps) {
  const { collections } = await getCollectionsList(0, 6)
  
  return (
    <RefinementList
      sortBy={sortBy}
      collections={collections}
      data-testid={dataTestId}
    />
  )
}

"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SortProducts, { SortOptions } from "./sort-products"
import { clx } from "@medusajs/ui"

interface Collection {
  id: string
  handle: string
  title: string
}

interface RefinementListProps {
  sortBy: SortOptions
  collections: Collection[]
  "data-testid"?: string
}

const RefinementList = ({
  sortBy,
  collections,
  "data-testid": dataTestId,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
      <a
        href="/store"
        title="store link"
        className="!txt-compact-small !transform-none text-ui-fg-subtle hover:cursor-pointer"
      >
        See all products
      </a>
      <SortProducts
        sortBy={sortBy}
        setQueryParams={setQueryParams}
        data-testid={dataTestId}
      />
      <div className="flex gap-x-3 flex-col gap-y-3">
        {collections && collections.length > 0 && (
          <div className="flex flex-col gap-y-2">
            <span className="font-normal font-sans txt-compact-small-plus text-ui-fg-muted">
              Collections
            </span>
            <ul
              className={clx(
                "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                {
                  "grid-cols-2": (collections?.length || 0) > 3,
                }
              )}
            >
              {collections?.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href={`/collections/${c.handle}`}
                  >
                    {c.title}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default RefinementList

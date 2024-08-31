import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import NavClient from "./navClient" // Importa el componente cliente

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className={`sticky top-0 inset-x-0 z-50 group`}>
      <NavClient>
        <nav className="content-container txt-xsmall-plus flex items-center justify-between w-full h-full text-small-regular text-inherit">
          <div className="flex-1 h-full flex items-center sm:hidden">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase ease-linear duration-100"
              data-testid="nav-store-link"
            >
              wildsphere
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 justify-end">
            <div className="hidden sm:flex items-center gap-x-6 h-full text-inherit">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base ease-linear duration-100"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base text-inherit ease-linear duration-100"
                href="/store"
                data-testid="nav-collections-link"
              >
                Store
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base text-inherit ease-linear duration-100"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </NavClient>
    </div>
  )
}

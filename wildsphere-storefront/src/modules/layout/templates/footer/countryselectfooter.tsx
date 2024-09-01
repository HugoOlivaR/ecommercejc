"use client"

import React from "react"
import { useToggleState, clx } from "@medusajs/ui"

import { ArrowRightMini } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import CountrySelect from "../../components/country-select"

type FooterProps = {
  regions: Region[] | null
}

export default function Countryselectfooter({ regions }: FooterProps) {
  const toggleState = useToggleState()

  return (
    <div
      className="flex justify-between"
      onMouseEnter={toggleState.open}
      onMouseLeave={toggleState.close}
    >
      {regions && <CountrySelect toggleState={toggleState} regions={regions} />}
      <ArrowRightMini
        className={clx(
          "transition-transform duration-150",
          toggleState.state ? "-rotate-90" : ""
        )}
      />
    </div>
  )
}

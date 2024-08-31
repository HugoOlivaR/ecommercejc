"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface ClientNavProps {
  children: React.ReactNode
}

const ClientNav = ({ children }: ClientNavProps) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname() // Obtener la ruta actual

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Lista de rutas que se consideran como "home page"
  const homePages = ["/us", "/es", "/eu"]

  // Verificar si la ruta actual es una de las rutas de inicio
  const isNotHomePage = !homePages.includes(pathname)

  return (
    <header
      className={`relative h-16 mx-auto duration-200 ${
        hasScrolled || isNotHomePage
          ? "bg-white bg-opacity-50 backdrop-blur-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      {children}
    </header>
  )
}

export default ClientNav

import Image from "next/image"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

interface ProductRailProps {
  imageUrl: string // Propiedad para la URL de la imagen
  altText?: string // Texto alternativo para la imagen
}

export default function ProductRail({
  imageUrl,
  altText = "Product Image",
}: ProductRailProps) {
  return (
    <div className="flex flex-col md:flex-row content-container py-12 small:py-24 md:gap-20">
      <ul className="grid grid-cols-1 gap-x-6 gap-y-24 w-full order-2 md:order-1">
        <li className="flex flex-col gap-1">
          <Image
            src={imageUrl} // Usa la URL proporcionada en las props
            alt={altText}
            width={900} // Ajusta el ancho según sea necesario
            height={500} // Ajusta la altura según sea necesario
            className="object-cover" // Opcional: ajusta cómo se muestra la imagen
          />
          <p className="font-normal font-sans txt-medium text-gray-400 mt-3">
            Arc Misty Grey Accent Chair
          </p>
        </li>
      </ul>
      <div className="flex flex-col mb-8 w-full md:w-3/5 lg:w-2/5 gap-5 order-1 md:order-2">
        <Text className="txt-medium text-xl-semi font-semibold font-archivo">
          Our Philosophy
        </Text>
        <p className="font-normal font-sans txt-medium text-gray-500">
          Elevate your home with Widsphere&#39;s perfect blend of style, simplicity,
          and affordability. Our exclusive collection of home accessories and
          decor is designed to enhance your space effortlessly. Each item is
          easy to install and budget-friendly, thanks to our direct partnerships
          with manufacturers. Experience how Widsphere brings elegance and
          convenience to your living environment, offering high-quality
          solutions at accessible prices.
        </p>
        <InteractiveLink href={`/store`}>View all</InteractiveLink>
      </div>
    </div>
  )
}

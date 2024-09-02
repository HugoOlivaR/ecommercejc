"use client";

import { useState } from "react";
import { Image as MedusaImage } from "@medusajs/medusa";
import { Container } from "@medusajs/ui";
import Image from "next/image";

type ImageGalleryProps = {
  images: MedusaImage[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<MedusaImage | null>(null);

  const openModal = (image: MedusaImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {images.slice(0, 2).map((image, index) => (
          <Container
            key={image.id}
            className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
            id={image.id}
          >
            <Image
              src={image.url}
              priority={index <= 2}
              className="absolute inset-0 rounded-rounded"
              alt={`Product image ${index + 1}`}
              fill
              sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
              style={{ objectFit: "cover" }}
            />
          </Container>
        ))}

        <div className="grid grid-cols-3 gap-4 mt-4">
          {images.slice(2, 8).map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle hover:opacity-70 ease-linear duration-200"
              onClick={() => openModal(image)}
            >
              <Image
                src={image.url}
                priority={false}
                className="absolute inset-0 rounded-rounded"
                alt={`Product image ${index + 3}`}
                fill
                sizes="(max-width: 576px) 140px, (max-width: 768px) 180px, (max-width: 992px) 240px, 400px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 h-full w-full flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="mx-10 w-96 xl:w-1/3"
            onClick={(e) => e.stopPropagation()} // Prevent click events from propagating to the parent div
          >
            <div className="text-center">
              <Container
                className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
                id={selectedImage.id}
              >
                <Image
                  src={selectedImage.url}
                  priority={true}
                  className="absolute inset-0 rounded-rounded"
                  alt={`Selected product image`}
                  fill
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                  style={{ objectFit: "cover" }}
                />
              </Container>
              <div className="flex justify-center mt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border ease-linear duration-150 text-white text-base font-medium rounded-md shadow-sm hover:bg-accent focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

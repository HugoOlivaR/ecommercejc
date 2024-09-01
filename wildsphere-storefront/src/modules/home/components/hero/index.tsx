import { ArrowUpRightOnBox } from "@medusajs/icons"
import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="-mt-16 h-[100svh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-cover bg-center md:h-[100vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/4492795/4492795-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="flex absolute inset-0 z-10 bg-black bg-opacity-25">
        <div className=" flex flex-col sm:justify-end items-start text-left py-32 content-container gap-6">
          <span>
            <Heading level="h1" className="text-3xl leading-10 text-white">
              Transform Your Home <br className="flex sm:hidden" /> with Style
            </Heading>
            <Heading
              level="h2"
              className="text-xl leading-10 text-white font-normal"
            >
              Discover Furniture, Decor, and Accessories for Every Corner of
              Your Home
            </Heading>
          </span>
          <a
            href="/store"
            rel="noopener"
            className="flex gap-2 items-center text-white py-2 px-3 border rounded-md hover:border-accent ease-linear duration-200"
          >
            Shop Now
            <ArrowUpRightOnBox />
          </a>
          <span className="text-white flex gap-2 items-center justify-center text-xs absolute bottom-10">
            <div className="w-2 h-2 rounded-full bg-accent"></div>Based in
            Madrid, Spain (40°30′N 3°40′O / 40.500, -3.667)
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero

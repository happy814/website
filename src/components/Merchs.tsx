import React, { useState } from "react";

const MerchShowcase: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<
    string | null
  >(null);

  // Shared classes
  const tshirtImageClasses =
    "object-cover hover:rounded-2xl hover:bg-[#995BD9] hover:opacity-90 md:h-60 lg:h-96";
  const tshirtContainerClasses =
    "lg:h-[400px] lg:w-[200px] xl:h-[400px] xl:w-[280px]";

  // Desktop T-shirt configurations
  const desktopTshirts = [
    {
      src: "/Merchs/t1.png",
      className:
        "absolute transform transition-all duration-300 hover:scale-105 md:left-10 md:top-[17rem] lg:bottom-10 lg:left-16 lg:top-auto lg:h-[400px] lg:w-[200px] xl:bottom-36 xl:left-0 xl:right-5",
    },
    {
      src: "/Merchs/t2.png",
      className:
        "relative transform transition-all duration-300 hover:scale-105 md:left-36 md:top-[22rem] lg:left-52 lg:top-16 xl:bottom-10 xl:left-44 xl:top-auto",
    },
    {
      src: "/Merchs/t1.png",
      className:
        "relative transform transition-all duration-300 hover:scale-105 md:-right-16 md:top-80 lg:-right-44 lg:top-10 xl:-right-16 xl:bottom-20 xl:top-auto",
    },
    {
      src: "/Merchs/t4.png",
      className:
        "relative transform transition-all duration-300 hover:scale-105 md:right-5 md:top-[25.5rem] lg:-right-36 lg:top-32 xl:right-5 xl:top-5",
    },
    {
      src: "/Merchs/t5.png",
      className:
        "relative transform transition-all duration-300 hover:scale-105 md:right-20 md:top-[24rem] lg:-right-32 lg:top-24 xl:bottom-2 xl:left-auto xl:right-24 xl:top-0",
    },
  ];

  // Reusable T-shirt image component
  const TShirtImage = ({
    src,
    className,
  }: {
    src: string;
    className: string;
  }) => (
    <div
      className={className}
      onMouseEnter={() => setHoveredImage(src)}
      onMouseLeave={() => setHoveredImage(null)}
    >
      <div className={tshirtContainerClasses}>
        <img
          src={src}
          alt="T-shirt design"
          className={tshirtImageClasses}
        />
      </div>
    </div>
  );

  const Header = () => (
    <div className="relative top-6 flex flex-col items-center justify-center md:pl-[20rem] lg:pl-[30rem] xl:pl-[40rem]">
      <h1 className="mb-4 text-3xl leading-tight md:text-4xl lg:text-5xl">
        OUR CUSTOMIZED <br /> MERCH'S
      </h1>
      <div className="py-5 md:pr-14 lg:pr-16">
        <div className="pl-10 md:pl-0">
          <img
            src="/Merchs/line1.png"
            alt="Decorative line"
          />
        </div>
        <p className="mx-auto max-w-80 pl-20 pt-5 text-left text-sm text-[#FFFFFF] md:max-w-60 md:pl-0 lg:max-w-80">
          Whether it's for events, promotions, or personal
          use, these T-shirts allow you to tailor everything
          from graphics and text to colors and fabric
          choices.
        </p>
      </div>
    </div>
  );

  const HangerLines = () => (
    <div className="hidden pt-16 md:block md:max-w-xl lg:max-w-4xl xl:max-w-5xl">
      {[
        "md:bottom-8 md:left-24 md:-rotate-2 lg:bottom-24 lg:left-10 lg:-rotate-[5.5deg] xl:bottom-28 xl:left-0",
        "md:bottom-36 md:left-24 md:-rotate-2 lg:bottom-[18rem] lg:left-12 lg:-rotate-6 xl:bottom-[21rem] xl:left-0",
        "md:bottom-[16rem] md:left-24 md:-rotate-2 lg:bottom-[29.5rem] lg:left-10 lg:-rotate-6 xl:bottom-[34.5rem] xl:left-0",
      ].map((className, index) => (
        <div
          key={index}
          className={`relative ${className}`}
        >
          <img
            src="/Merchs/line2.png"
            alt={`Hanger line ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
  //  T-Shirt Display for Larger Screens
  const TShirtDisplay = () => (
    <div className="relative bottom-[50rem] mx-auto hidden md:flex lg:max-w-4xl xl:max-w-5xl">
      {desktopTshirts.map((tshirt, index) => (
        <TShirtImage key={index} {...tshirt} />
      ))}
    </div>
  );
  // T-Shirt Display for Mobile Screens
  const TShirtDisplay2 = () => (
    <div className="mx-auto flex items-center justify-center py-16 md:hidden">
      <div className="absolute top-1">
        <img
          className="w-[30rem] object-cover"
          src="/Merchs/Rectangle.png"
          alt=""
        />
      </div>

      <div
        className=""
        onMouseEnter={() =>
          setHoveredImage("/Merchs/custoduy1.png")
        }
        onMouseLeave={() => setHoveredImage(null)}
      >
        {/* Hanger line */}
        <div className="pt-1">
          <div className="relative bottom-[3.9rem]">
            <img
              className="w-[30rem]"
              src="/Merchs/n-line.png"
              alt="Hanger line1"
            />
          </div>
          <div className="relative bottom-40">
            <img
              className="w-[30rem]"
              src="/Merchs/n-line.png"
              alt="Hanger line2"
            />
          </div>
          <div className="absolute bottom-44">
            <img
              className="w-[30rem]"
              src="/Merchs/n-line.png"
              alt="Hanger line3"
            />
          </div>
        </div>

        {/* img-1 */}
        <div className="relative bottom-72 right-4">
          <div className="absolute transform transition-all duration-300 hover:scale-105">
            <img
              src="/Merchs/custoduy1.png"
              alt="T-shirt design"
              className="h-[270px] object-cover hover:rounded-2xl hover:opacity-90 hover:shadow-lg hover:shadow-white"
            />
          </div>
        </div>
      </div>
      {/* img-2 */}
      <div
        className="absolute transform transition-all duration-300 hover:scale-105"
        onMouseEnter={() =>
          setHoveredImage("/Merchs/t2.png")
        }
        onMouseLeave={() => setHoveredImage(null)}
      >
        <div className="relative left-16 top-24">
          <img
            src="/Merchs/t2.png"
            alt="T-shirt design"
            className="h-[270px] object-cover hover:rounded-2xl hover:opacity-90 hover:shadow-lg hover:shadow-white"
          />
        </div>
      </div>
    </div>
  );

  const PreviewSection = () => (
    <div className="flex flex-col items-center justify-center pb-16 pt-20 md:max-w-3xl md:pb-0 md:pt-[35rem] lg:max-w-4xl lg:pl-0 xl:max-w-6xl">
      <div className="hidden md:block md:pr-[40rem] lg:pr-[50rem] xl:pr-[60rem]">
        <img
          className="object-cover"
          src="/Merchs/dot.png"
          alt="Decorative dot"
        />
      </div>
      <div className="pl-2 pr-72 pt-5 md:hidden">
        <img
          className="h-[ 29.51px] w-[26.75px] object-cover"
          src="/Merchs/dot.png"
          alt="Decorative dot"
        />
      </div>
      <div className="flex gap-8 pr-10 md:pr-72 lg:pr-[25rem] xl:pr-[34rem]">
        <div className="h-[63.98px] w-[69.44px] overflow-hidden rounded-[9.53px] bg-[#464242] md:h-24 md:w-28 md:rounded-[17.28px] lg:h-[116px] lg:w-[125.9px]">
          {hoveredImage ? (
            <img
              src={hoveredImage}
              alt="Hovered t-shirt"
              className="h-16 w-20 object-cover md:h-28 md:w-36"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-500" />
          )}
        </div>
        <span className="hidden md:block md:text-lg">
          NAME OF THE TSHIRT
        </span>
        <span className="pt-10 text-base md:hidden md:text-lg">
          Custody t-shirt
        </span>
      </div>
      <div className="hidden w-[40rem] py-10 pl-6 md:block lg:w-full lg:pl-20">
        <img
          className="object-cover"
          src="/Merchs/endpic.png"
          alt="Statistics"
        />
      </div>
      <div className="flex w-[323px] items-center justify-center py-10 md:hidden">
        <img
          className="w-[290px] object-cover"
          src="/Merchs/endpic2.png"
          alt="Statistics"
        />
      </div>
    </div>
  );

  return (
    <div className="max-h-[90rem] items-center justify-center pt-10 text-white md:flex md:pb-40">
      <div className="max-w-7xl">
        <Header />
        <div className="relative md:absolute">
          <HangerLines />
          <TShirtDisplay />
          <TShirtDisplay2 />
        </div>
        <PreviewSection />
      </div>
    </div>
  );
};

export default MerchShowcase;

import { merchData } from "../context/index";

const Store: React.FC = () => {
  const products = merchData;

  return (
    <div className="min-h-screen">
      <div className="md:py-20">
        <h1 className="py-5 text-center text-3xl font-semibold tracking-wide text-white md:text-8xl lg:py-1 lg:pt-5 lg:text-[130px] xl:text-[153.85px]">
          MERCH STORE
        </h1>

        {/* mobile */}
        <div className="flex justify-center gap-2 pb-2 md:hidden">
          <img
            className="w-18 relative right-2 h-6 object-cover"
            src="/store/t-shirts.png"
            alt="T-shirts category"
            loading="eager"
          />
          <img
            className="relative right-2 h-6 object-cover"
            src="/store/mugs.png"
            alt="Mugs category"
            loading="eager"
          />
          <img
            className="relative right-2 h-6 object-cover"
            src="/store/caps.png"
            alt="Caps category"
            loading="eager"
          />
        </div>

        {/* line and button for pc */}
        <div className="relative flex flex-col justify-center space-x-4 md:bottom-10 xl:bottom-14">
          <div className="relative flex w-full items-center justify-between md:h-24">
            <div className="absolute left-0 h-px w-full">
              <img
                className="w-full object-cover"
                src="/store/line.png"
                alt="Decorative line"
                loading="eager"
              />
            </div>

            {/* button section */}
            <div className="absolute right-10 hidden space-x-8 md:top-12 md:flex lg:right-40 xl:right-48 xl:top-[3.6rem]">
              <a
                href="/"
                className="flex flex-col items-center"
              >
                <img
                  src="/store/t2.png"
                  alt="T-Shirts collection"
                  className="h-20 object-cover md:w-28 lg:h-24 lg:w-32 xl:h-28 xl:w-36"
                  loading="eager"
                />
              </a>
              <a
                href="/mugs"
                className="flex flex-col items-center"
              >
                <img
                  src="/store/m2.png"
                  alt="Mugs collection"
                  className="h-20 w-20 object-cover lg:h-24 lg:w-24 xl:h-28 xl:w-28"
                  loading="eager"
                />
              </a>
              <a
                href="/caps"
                className="flex flex-col items-center"
              >
                <img
                  src="/store/c2.png"
                  alt="Caps collection"
                  className="h-20 w-20 object-cover lg:h-24 lg:w-24 xl:h-28 xl:w-28"
                  loading="eager"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* card section */}
      <div className="flex justify-center pt-10">
        <div className="mt-6 grid grid-cols-1 gap-16 md:grid-cols-3 md:px-10 lg:gap-20">
          {products.map((item, index) => (
            <div key={item.id} className="flex flex-col">
              <div
                className={`${
                  index === 1
                    ? "bg-[#9747FF]"
                    : "bg-[#464242]"
                } flex h-64 w-52 transform justify-center rounded-2xl shadow-md transition-transform hover:scale-105 hover:bg-slate-300 md:h-56 md:w-44 lg:h-80 lg:w-64 xl:h-[416px] xl:w-[344px]`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full rounded-2xl object-cover lg:h-72 lg:w-60 xl:h-[371px] xl:w-[290px]"
                  loading="lazy"
                />
              </div>
              <p className="pt-5 text-xs text-[#9747FF]">
                {item.category}
              </p>
              <h2 className="mt-4 text-base font-bold text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-lg text-white">
                ₹ {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;

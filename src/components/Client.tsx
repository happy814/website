import { clientWorkData } from "../context/index";

const ClientWorkComponent: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#995BD9]">
      <div className="mx-auto flex flex-col items-center px-10">
        <div className="flex flex-col md:max-w-2xl lg:max-w-4xl">
          <div className="flex">
            <img
              className="w-20"
              src="/Client/spiral.png"
              alt="Spiral decoration"
              loading="eager"
            />
          </div>
          <h2 className="mb-12 pt-10 font-base text-3xl text-white md:mb-24 md:text-5xl">
            CLIENT'S WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5 lg:gap-8">
            {clientWorkData.map((work) => (
              <div
                key={work.id}
                className="bg-transparent text-white"
              >
                <div className="mb-4 flex flex-col">
                  <img
                    src={work.imageUrl}
                    alt={`${work.title}`}
                    className="pl-0 md:w-40 lg:h-36 lg:w-[212px]"
                    loading="lazy"
                  />
                  <div className="pl-1">
                    <div className="py-7">
                      <img
                        className="md:w-40 lg:w-[227px]"
                        src={work.line}
                        alt="Decorative line"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-left font-semibold lg:text-lg">
                      {work.title}
                    </h3>
                    <p className="mt-2 w-56 text-left text-sm md:w-32 lg:w-48">
                      {work.description}
                    </p>
                    <img
                      className="pb-10 pt-5 md:pb-0"
                      src={work.buttonimg}
                      alt={`Learn more about ${work.title}`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientWorkComponent;

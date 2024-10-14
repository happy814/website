import { DATA } from "../context";

const Services = () => {
  return (
    <section className="bg-[#995BD9] w-screen  ">
      <div className=" md:max-w-2xl lg:max-w-4xl pt-10  mx-auto flex flex-col ">
        {/* Title Section */}
        <div className="  flex md:flex-row flex-col  md:justify-between justify-center items-center  ">
          <h2 className="text-[#FFFFFF] text-2xl lg:text-4xl pt-10 tracking-widest  mb-8 text-left lg:leading-tight font-sans ">
            INNOVATING TO<br></br> MEET YOUR HIGHEST
            <br /> EXPECTATIONS
          </h2>

          <div className="mt-10   flex ">
            <img
              className=" w-36 h-44 lg:w-56 md:h-56 md:w-44  lg:h-72"
              src="/Services/me.png"
              alt=""
            />
            <img
              className="  h-44   md:h-56 lg:h-72 pl-7"
              src="/Services/Rectangle.png"
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-4 pt-20 gap-8 mb-10  select-none  ">
          {/* Map over the  DATA */}
          {DATA.map((card) => (
            <div className="mx-auto">
              <div key={card.id} className=" tracking-widest text-white">
                <div className="text-lg font-bold mb-2">{card.number}</div>
                <img className="pb-5" src="/Services/line2.png" alt="line" />
                <h3 className="lg:text-xl md:text-sm  mb-4">{card.title}</h3>
                <img
                  className="h-8 w-20"
                  src="/Services/explore.png"
                  alt="explore"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

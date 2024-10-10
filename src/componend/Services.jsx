import { DATA } from "../context";

const Services = () => {
  return (
    <section className="bg-[#995BD9] p-8">
      <div className="md:max-w-4xl pt-10  mx-auto flex flex-col ">
        {/* Title Section */}
        <div className="flex flex-row justify-between ">
          <h2 className="text-[#FFFFFF] text-4xl pt-10 tracking-widest  mb-8 text-left lg:leading-tight font-sans ">
            INNOVATING TO<br></br> MEET YOUR HIGHEST
            <br /> EXPECTATIONS
          </h2>

          <div className="mt-10   flex ">
            <img
              className="lg:w-[250px] h-[310px]"
              src="/Services/me.png"
              alt=""
            />
            <img
              className="h-[310px] pl-7"
              src="/Services/Rectangle.png"
              alt=""
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 lg:pt-10 gap-8  ">
          {/* Map over the  DATA */}
          {DATA.map((card) => (
            <div key={card.id} className=" tracking-widest text-white">
              <div className="text-lg font-bold mb-2">{card.number}</div>
              <img className="pb-5" src="/Services/line2.png" alt="line" />
              <h3 className="text-xl  mb-4">{card.title}</h3>
              {/* <button className=" text-white px-4 py-2 rounded-full">
                {card.buttonText}
              </button> */}
              <img src="ex.png" alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { missionData } from "../context";

export default function Support() {
  const mission = missionData[0];

  return (
    <div className="flex max-h-screen flex-col items-center pt-10 text-white md:pt-28">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-20 md:flex-row md:gap-16 lg:max-w-7xl lg:pl-16 xl:gap-20">
        <div className="relative flex md:bottom-10">
          <h1 className="text-xl font-normal md:text-3xl md:leading-snug lg:text-5xl xl:text-5xl">
            EMPOWER CHANGE :<br />
            SUPPORT OUR MISSION
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-60 object-cover md:w-72 lg:h-60 lg:w-full"
            src="/Support/c2.png"
            alt="circle"
          />
        </div>
      </div>
      <div className="relative hidden md:bottom-16 md:right-64 md:block lg:right-[18rem] xl:bottom-20 xl:right-[19rem]">
        <img
          className="md:h-16 md:w-24 lg:h-20 lg:w-32 xl:h-20 xl:w-36"
          src="/Support/arow.png"
          alt="arrow"
        />
      </div>
      <div className="relative flex p-5 md:bottom-5 md:left-10 md:p-0 lg:bottom-5 lg:left-24 xl:left-28">
        <p className="text-xs md:max-w-xl lg:max-w-3xl xl:text-sm">
          {mission.description}
        </p>
      </div>
    </div>
  );
}

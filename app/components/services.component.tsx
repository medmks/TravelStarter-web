// import { image1 } from "~/assets"?
import SectionWrapper from "~/Hoc";
import { style } from "~/utilities/style";

const Services = () => {
  return (
    <section className=" relative ">
      <h2 className={`${style.SubTitle}`}><span className={`${style.SubTitle}`}>{"//"}</span>OUR SERVICES</h2>

      <div className="flex flex-col gap-3 mt-6">
        <h1 className="text-black font-outfit font-normal text-5xl leading-tight">
          Explore endless options with our services{" "}
        </h1>
        <p className="text-gray-500 font-outfitsubtext font-normal text-xl w-full sm:w-[50%]  leading-tight">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rem
          nisi error magnam magni accusantium .
        </p>
      </div>

      <div className=" w-full h-[80vh] mt-12 flex flex-col sm:flex-row  gap-5">
        <div className="w-full h-full bg-service-pattern rounded-2xl object-cover  bg-no-repeat bg-center size-auto bg-cover flex relative">
          <div className="flex flex-col gap-2 p-4 pl-7 justify-end items-start">
            <h3 className="text-white font-outfit font-normal text-4xl leading-tight">
              Comprhensive Travel support
            </h3>
            <p className="text-white font-outfitsubtext font-normal text-2xl sm:text-xl leading-tight">
              Lorem ipsum dolor, sit amet .
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-5 ">
          <div className="w-full h-full bg-hero-pattern2 rounded-2xl object-cover  bg-no-repeat bg-center size-auto bg-cover flex relative">
            <div className="flex flex-col gap-2 p-4 justify-end items-start pl-7">
              <h3 className="text-white font-outfit font-normal text-4xl leading-tight">
                Comprhensive Travel support
              </h3>
              <p className="text-white font-outfitsubtext font-normal text-xl leading-tight">
                Lorem ipsum dolor, sit amet .
              </p>
            </div>
          </div>

          <div className="w-full h-full bg-service-pattern1 rounded-2xl object-cover  bg-no-repeat bg-bottom size-auto bg-cover flex relative">
            <div className="flex flex-col gap-2 p-4 justify-end items-start pl-7">
              <h3 className="text-white font-outfit font-normal text-4xl leading-tight">
                Comprehensive Travel support
              </h3>
              <p className="text-white font-outfitsubtext font-normal text-xl   leading-tight">
                Lorem ipsum dolor, sit amet .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper({ Children: Services, id: "services" });

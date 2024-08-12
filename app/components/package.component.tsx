import SectionWrapper from "~/Hoc";
import { style } from "~/utilities/style";

const Package = () => {
  return (
    <section className="relative flex justify-center items-center flex-col">
          <h2 className={`${style.SubTitle}`}><span className={`${style.SubTitle}`}>{"//"}</span>OUR PACKAGE</h2>

          <div className="flex flex-col gap-3 mt-6 w-4/5">
                    <h1 className="text-black font-outfit text-center font-normal text-5xl leading-tight">
                              Discover our exceptional selection of travel package and destinations {" "}
                    </h1>
          </div>
    </section>
  );
};

export default SectionWrapper({ Children: Package, id: "package" });

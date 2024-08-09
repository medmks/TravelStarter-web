import Parteners from "~/constants";
import SectionWrapper from "~/Hoc";

const Partners = () => {
  return (
    <section className=" z-10 ">
      <div className="flex flex-row justify-between items-center bg-gradient-to-r from-transparent to-white">
        {Parteners.map((partner) => {
          return (
            <div
              key={partner.name}
              className="flex justify-center items-center"
            >
              <img
                className="md:max-w-[200px] max-w-[100px] h-auto object-contain"
                src={partner.image}
                alt={partner.name}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionWrapper({ Children: Partners, id: "partners" });

import Parteners from "~/constants";
import SectionWrapper from "~/Hoc";

const Partners = () => {
  return (
    <section className="w-full z-10 ">
      <div className="flex flex-row justify-center items-center gap-20 bg-gradient-to-r from-transparent to-white">
        {Parteners.map((partner) => {
          return (
            <div
              key={partner.name}
              className="flex justify-center items-center"
            >
              <img
                className="max-w-[200px] h-auto object-contain"
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

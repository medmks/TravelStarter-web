import { Parteners } from "~/constants";
import SectionWrapper from "~/Hoc";

const Partners = () => {
  return (
    <section className="z-10">
      <div className="grid md:grid-rows-1 grid-rows-2 grid-flow-col gap-5">
        {Parteners.map((partner) => {
          return (
            <div key={partner.name} className="flex justify-center items-end">
              <img
                className="md:max-w-[200px] max-w-[120px] h-auto object-contain"
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

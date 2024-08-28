import { useState } from "react";
import { Questions } from "~/constants";
import SectionWrapper from "~/Hoc";
import { style } from "~/utilities/style";

const FAQs = () => {
  const [active, setactive] = useState<number>();
  return (
    <section className="relative w-full  ">
      <div className="flex md:flex-row flex-col gap-10 ">
        <div className="md:w-1/2 flex flex-col gap-6 mt-5">
          <div className="">
            <h2 className={`${style.SubTitle}`}>
              <span className={`${style.SubTitle} mr-2`}>{"//"}</span>FAQs
            </h2>
          </div>

          <h2 className="text-black font-outfit font-light md:text-7xl text-4xl leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 font-outfitsubtext font-normal text-2xl w-full md:w-[70%] leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            excepturi necessitatibus assumenda quidem explicabo, inventore{" "}
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col gap-10 md:p-5">
          {Questions.map(({ question, answer }, key) => (
            <div
              className="transition-[height] duration-[0.5s] h-fit border border-slate-400 p-4 rounded-2xl "
              key={key}
            >
              <button
                className="flex flex-col gap-3 text-start w-full"
                onClick={() => setactive(key)}
                aria-current={active === key}
                type="button"
              >
                <h1 className="text-black font-outfit font-medium text-2xl leading-tight">
                  {question}
                </h1>
                {active === key && (
                  <p className="text-gray-500  translate-y-2  font-outfitsubtext font-normal text-xl leading-tight">
                    {answer}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper({ Children: FAQs, id: "FAQs" });

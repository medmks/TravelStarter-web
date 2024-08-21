import SectionWrapper from "~/Hoc";
import { style } from "~/utilities/style";
import { Packages } from "~/constants";
import { useState } from "react";
import classNames from "classnames";

const Package = () => {
  const [Active, setActive] = useState(1);
  return (
    <section className="relative flex justify-center items-center flex-col">
      <h2 className={`${style.SubTitle}`}>
        <span className={`${style.SubTitle} mr-2`}>{"//"}</span>OUR PACKAGE
      </h2>

      <div className="flex flex-col gap-3 mt-6 w-4/5">
        <h1 className="text-black font-outfit text-center font-normal text-5xl leading-tight">
          Discover our exceptional selection of travel package and destinations{" "}
        </h1>
      </div>
      <div className=" w-full h-full flex justify-center items-center">
        <div className="w-[1200px] max-w-full">
          <div className="group flex h-[640px] gap-[1.5%]">
            {Packages.map((item, index) => {
              return (
                <div
                  onClick={() => setActive(index)}
                  aria-current={Active === index}
                  key={index}
                  tabIndex={0}
                  role="button"
                  className={classNames(
                    "relative w-[15%] cursor-pointer transition-[width] rounded-2xl [&[aria-current='true']]:w-[70%]",
                    "before:absolute before:bg-white before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px]",
                    " [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[13%] hover:w-[18%]",
                  )}
                >
                  <div className="h-full w-full overflow-hidden rounded-2xl">
                    <img
                      className="h-full w-full object-cover  "
                      src={item.image}
                      alt={item.package}
                    />
                    <div
                      className={classNames(
                        "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
                        Active === index ? "md:opacity-25" : "md:opacity-0",
                      )}
                    />
                    <div
                      className={classNames(
                        "left-8 top-8 w-[590px] p-4 transition-[transform,opacity] md:absolute md:p-0",
                        Active === index
                          ? "md:translate-x-0 md:opacity-100"
                          : "md:translate-x-4 md:opacity-0",
                      )}
                    >
                      <p className="text-sm uppercase text-primary md:text-lg">
                        {item.description}
                      </p>
                      <p className="text-lg font-bold md:text-4xl">
                        {item.package}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper({ Children: Package, id: "package" });

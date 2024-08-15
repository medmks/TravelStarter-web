import SectionWrapper from "~/Hoc";
import { style } from "~/utilities/style";
import {Packages} from "~/constants"
import { useState } from "react";
import classNames from "classnames";

const Package = () => {
          const [Active, setActive] = useState(1);
  return (
    <section className="relative flex justify-center items-center flex-col">
          <h2 className={`${style.SubTitle}`}><span className={`${style.SubTitle}`}>{"//"}</span>OUR PACKAGE</h2>

          <div className="flex flex-col gap-3 mt-6 w-4/5">
                    <h1 className="text-black font-outfit text-center font-normal text-5xl leading-tight">
                              Discover our exceptional selection of travel package and destinations {" "}
                    </h1>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
                    <div className="w-[1200px] max-w-full">
                              <ul className="group flex h-[640px] gap-[1.5%]">
                              {
                              Packages.map((item, index) => {
                                return (
                                  <li
                                  aria-current={Active === index}
                                    key={index}
                                    className={classNames("relative w-[15%] cursor-pointer transition-[width] rounded-2xl [&[aria-current='true']]:w-[70%]",
                                        "before:absolute before:bg-white before:top-0  before:bottom-0 before:left-[-10px] before:right-[-10px]"
                                        ," [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[13%] hover:w-[18%]"
                                    )}
                                  >
                                        <div className="w-full h-full rounded-2xl overflow-hidden">

                                                  <img className="grayscale w-full h-full object-cover" src={item.image} alt={item.package} />
                                        </div>
                                        {/* {item.Duration} */}

                                  </li>
                                );
                              })
                    }
                              </ul>
                    </div>
          </div>
    </section>
  );
};

export default SectionWrapper({ Children: Package, id: "package" });

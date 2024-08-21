import { useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "~/utilities/motion";
import { style } from "~/utilities/style";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`ralative max-w-full w-full sm:h-[98vh] h-fit ${style.HeroPadding} `}
    >
      <div className=" bg-hero-pattern5 w-full  h-full  rounded-2xl bg-no-repeat bg-center size-auto bg-cover flex relative  ">
        <div className="bg-[#00000042] rounded-2xl flex w-full h-full flex-col justify-center items-center ">
          <div className="h-full flex flex-col justify-center mt-40 items-center w-full sm:w-2/3 px-10 gap-10">
            <motion.h1
              variants={textVariant(0.35)}
              className={`${style.HeroHeadTitle} text-start lg:text-center`}
            >
              Begin your dream journey with our expert guidance and support
            </motion.h1>

            <div className=" lg:w-fit w-full bg-[#00000042]  border-gray-400 p-1  shadow-lg    lg:rounded-full  rounded-xl  flex  justify-center ">
              <form
                action=""
                className=" w-full p-5 lg:p-2 flex flex-col lg:flex-row   justify-center gap-3  "
              >
                <select className="bg-transparent text-xl text-white  font-outfitsubtext outline-none w-full lg:w-44  ">
                  <option>seach destination</option>
                </select>
                <div className="lg:border-r border-b border-gray-300 opacity-50 mx-3 m-2" />
                <select className="bg-transparent text-white text-xl font-outfitsubtext outline-none w-full lg:w-44  ">
                  <option>Date destination</option>
                </select>
                <div className="lg:border-r border-b border-gray-300  opacity-50 mx-3 m-2" />
                <select className="bg-transparent text-xl text-white font-outfitsubtext outline-none w-full lg:w-44 ">
                  <option>Trip type</option>
                </select>
                <div className="lg:border-r border-b border-gray-300 opacity-50  mx-3 m-2" />
                <button className="bg-white text-black font-outfitsubtext hover:bg-gray-200 px-10 py-3 text-xl rounded-full font-medium">
                  Explore
                </button>
              </form>
            </div>
          </div>
          <div className=" w-full flex flex-row items-end justify-center  py-8 lg:p-14 ">
            <div className="hidden lg:flex flex-col gap-5 lg:w-1/2 w-full ">
              <motion.button
                variants={fadeIn("right", "tween", 0.4, 0.4)}
                className="bg-transparent text-white font-outfitsubtext border w-fit px-5 py-2 rounded-full font-light flex flex-row items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                Morocco,Casablanca
              </motion.button>
              <motion.h3
                variants={fadeIn("right", "tween", 1, 1)}
                className="text-white hidden sm:flex font-outfitsubtext text-2xl  line-clamp-2"
              >
                Book your Travel and transportation service with us and enjoy a
                hasse-free and memorable journey{" "}
              </motion.h3>
            </div>
            <div className="flex justify-center lg:justify-end  lg:items-end w-1/2">
              <motion.button
                onClick={() => navigate("#services")}
                variants={fadeIn("left", "tween", 0.5, 0.5)}
                className="bg-transparent text-white font-outfitsubtext border w-fit px-5 py-2 rounded-full font-light flex flex-row items-center gap-2"
              >
                Explore more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

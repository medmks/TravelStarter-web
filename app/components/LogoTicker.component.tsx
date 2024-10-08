import { motion } from "framer-motion";
import { Parteners } from "~/constants";
import SectionWrapper from "~/Hoc";

const LogoTicker = () => {
  return (
    <section>

          <div className='container'>
                    <div className="flex items-center gap-5">
                              {/* <div className=" flex-1 md:flex-none ">
                                        <h1>trusted brands</h1>
                              </div> */}
                              <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_30%,white_70%,transparent)]">
                                        <motion.div
                                        initial={{translateX:"-50%"}}
                                        animate={{translateX:"0"}}
                                        transition={{
                                                  repeat:Infinity,
                                                  duration:30,
                                                  ease:"linear"
                                        }}
                                        className="
                                        flex flex-none gap-16 pr-16 -translate-x-1/2">
                                                  {
                                                            Parteners.map((partner) => {
                                                                      return (
                                                                                <img
                                                                                          key={partner.name}
                                                                                          src={partner.image}
                                                                                          alt={partner.name}
                                                                                          className="w-auto h-10"
                                                                                />
                                                                      )
                                                            })
                                                  }
                                        </motion.div>
                              </div>

                    </div>
          </div>

    </section>
  )
}

export default SectionWrapper({ Children: LogoTicker, id: "partners" })
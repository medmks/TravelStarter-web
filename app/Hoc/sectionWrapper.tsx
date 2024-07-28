import { motion } from "framer-motion";
import { staggerContainer } from "~/utilities/motion";
import { style } from "~/utilities/style";

type TSectionWrapperProps = {
          Children: React.FC;
          id: string;
        };

        
const SectionWrapper = ({ Children,id }: TSectionWrapperProps) => 
          function HOC(){
                    return (
                              <motion.section
                              variants={staggerContainer()}
                              initial="hidden"
                              whileInView="show"
                              viewport={{once:true,amount:0.25}}
                              id={id} className={` max-w-full mx-auto relative z-0 ${style.padding}`}>
                                        <Children/>
                              </motion.section>
                    )
          }




export default SectionWrapper;
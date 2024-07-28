
import { motion } from 'framer-motion'
import SectionWrapper from '~/Hoc'
import { fadeIn } from '~/utilities/motion'
import { style } from '~/utilities/style'

const About = () => {
  return (
    <section className='relativem mt-5 '>
         
          <motion.h2 variants={fadeIn("left", "tween", 0.5, 0.5)} className={`${style.SubTitle}`}>ABOUT US </motion.h2>
    
          <div className='flex flex-row mt-5'>
                  <div className='w-1/2'>
                       <motion.p variants={fadeIn("right", "tween", 0.5, 0.5)} className='text-black font-outfitsubtext font-light text-4xl leading-tight  '>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              <span className='text-gray-400 font-light'>Our mission is to provide you with the best travel experiences</span>
                    </motion.p>
                  </div>
                 

                    <motion.div variants={fadeIn("left", "tween", 0.5, 0.5)} className='flex flex-col justify-end items-center w-1/2 '>
                      <div className='flex flex-row '>

                        <div className='flex flex-col justify-center items-center gap-1'>
                          <h3 className='text-black font-outfitsubtext font-normal text-4xl leading-tight '>78+</h3>
                          <span className='text-gray-500 font-normal text-2xl'>Happy Clients</span>
                        </div>
                        <div className="border-r border-gray-400  opacity-50 mx-3 m-5"/>
                        <div className='flex flex-col justify-center items-center gap-1'>
                          <h3 className='text-black font-outfitsubtext font-normal text-4xl leading-tight '>25+</h3>
                          <span className='text-gray-500 font-normal text-2xl'>Top Hotels</span>
                        </div>
                        <div className="border-r border-gray-400  opacity-50 mx-3 m-5"/>
                        <div className='flex flex-col justify-center items-center gap-1'>
                          <h3 className='text-black font-outfitsubtext font-normal text-4xl leading-tight '>32+</h3>
                          <span className='text-gray-500 font-normal text-2xl'>Experienced Guide</span>
                        </div>


                      </div>
                    </motion.div>

          </div>

          
          
    </section>
  )
}

export default SectionWrapper({ Children:About,id:"about"})
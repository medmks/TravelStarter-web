
import SectionWrapper from '~/Hoc'
import { style } from '~/utilities/style'

const About = () => {
  return (
    <section className='p-14 relative w-full'>
          <div>
                    <h2 className={`${style.SubTitle}`}>ABOUT US </h2>
          </div>
          <div className='mt-5 w-1/2'>
                    <p className='text-black font-outfitsubtext font-light text-4xl leading-tight  '>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              <span className='text-gray-400 font-light'>Our mission is to provide you with the best travel experiences</span>
                    </p>
          </div>
          
    </section>
  )
}

export default SectionWrapper({ Children:About,id:"about"})
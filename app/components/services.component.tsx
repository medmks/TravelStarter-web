// import { image1 } from "~/assets"?
import SectionWrapper from "~/Hoc"
import { style } from "~/utilities/style"

const Services = () => {
  return (
    <section className=" relative p-14  ">
          <h2 className={`${style.SubTitle}`}>Our Services</h2>

          <div className="flex flex-col gap-3 mt-6">
                    <h1 className="text-black font-outfit font-light text-5xl leading-tight">Explore endless options with our services </h1>
                    <p className="text-gray-500 font-outfitsubtext font-normal text-xl w-[50%]  leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rem nisi error magnam magni accusantium .</p>
          </div>

          <div className=" w-full h-[80vh] mt-6 flex flex-row gap-5">
                              <div className="w-full h-full bg-hero-pattern3 rounded-2xl object-cover  bg-no-repeat bg-center size-auto bg-cover flex relative">

                              </div>
                              <div className="w-full h-full flex flex-col gap-5 ">
                                        <div className="w-full h-full bg-hero-pattern2 rounded-2xl object-cover  bg-no-repeat bg-center size-auto bg-cover flex relative">
                                                  {/* <img src={image1} alt="" className="w-full  "/>      */}
                                        </div>

                                        <div className="w-full h-full bg-hero-pattern4 rounded-2xl object-cover  bg-no-repeat bg-bottom size-auto bg-cover flex relative">

                                        </div>


                              </div>
          </div>

         
         
    </section>
  )
}

export default SectionWrapper({ Children:Services,id:"services"})

import SectionWrapper from "~/Hoc"
const Hero = () => {
                    return (
                              <div className="ralative w-full h-[98vh] ">
                                <div className=" bg-hero-pattern w-full h-full  rounded-3xl bg-no-repeat bg-center size-auto bg-cover flex relative  ">
                                  <div className="bg-[#00000042] rounded-3xl flex w-full h-full flex-col justify-center items-center ">

                                      <div className="h-full  flex flex-col  justify-center mt-40 items-center w-2/3  gap-10">
                                          <h1 className="font-outfit text-6xl text-white whitespace-pre-line text-center">Begin your dream journey with our expert guidance and support</h1>
                                          <div className="w-fit bg-[#00000042]  border border-gray-400 p-3 shadow-lg  rounded-full flex justify-center ">
                                                <form action="" className="w-full h- flex flex-row  ">
                                                    <select className="bg-transparent text-white font-outfitsubtext outline-none w-44 "><option>seach destination</option></select>
                                                    <div className="border-r border-gray-300 opacity-50 mx-3 m-2"/>
                                                    <select className="bg-transparent text-white font-outfitsubtext outline-none w-44  "><option>Date destination</option></select>
                                                    <div className="border-r border-gray-300  opacity-50 mx-3 m-2"/>
                                                    <select className="bg-transparent text-white font-outfitsubtext outline-none w-44 "><option>Trip type</option></select>
                                                    <div className="border-r border-gray-300 opacity-50  mx-3 m-2"/>
                                                    <button className="bg-white text-black font-outfitsubtext hover:bg-gray-200 px-10 py-3 rounded-full font-medium">Explore</button>
                                                </form> 
                                          </div>
                                      </div>

                                      <div className=" w-full  flex flex-row  items-end p-14    ">
                                        <div className="flex flex-col gap-5 w-1/2 ">
                                          <button className="bg-transparent text-white font-outfitsubtext border w-fit px-5 py-4 rounded-full font-light flex flex-row items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                            Morocco,Casablanca
                                          </button>
                                          <h3 className="text-white font-outfitsubtext text-2xl  line-clamp-2">Book your Travel and transportation service with us and enjoy a hasse-free and memoable journey </h3>
                                        </div>
                                        <div className="flex justify-end items-end w-1/2">
                                            <button className="bg-transparent text-white font-outfitsubtext border w-fit px-5 py-4 rounded-full font-light flex flex-row items-center gap-2">
                                            Explore more
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                            </svg>

                                              </button>
                                              
                                        </div>
                                          
                                      </div> 
                                  </div>

                                  
                                 
                                </div>
                              </div>
                    )
}

export default SectionWrapper({ Children:Hero,id:"hero"})

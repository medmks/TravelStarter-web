
const Navbar = () => {
  return (
    <nav className="absolute z-50 w-full p-4 h-[100px] ">
          <div className="absolute bottom-1/3 left-5 sm:left-16 sm:bottom-0 w-fit ">
            <h1 className="font-outfit font-normal text-2xl sm:text-3xl  text-white">Travelellah</h1>
          </div>

          <div className="hidden absolute bottom-0 right-24">
            <ul className=" flex flex-row list-none gap-9 text-white font-outfitsubtext">
              <li className="underline underline-offset-4">Home</li>
              <li><a href="/">About</a></li>
              <li><a href="/">Our services</a></li>
              <li><a href="/">Travel Package</a></li>
              <li><a href="/">Destination</a> </li>
            </ul>
          </div>
          <div className="flex justify-end mt-4 pr-3 right-5 bottom-1/3 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          </div>
    </nav>
  )
}

export default Navbar

const Navbar = () => {
  return (
    <nav className="absolute  z-50 w-full p-4 h-[100px]">
          <div className="absolute bottom-0 left-24">
            <h1 className="font-outfit text-3xl text-white">Travelellah</h1>
          </div>
          <div className="absolute bottom-0 right-24">
            <ul className=" flex flex-row list-none gap-9 text-white font-outfitsubtext">
              <li className="underline underline-offset-4">Home</li>
              <li>About</li>
              <li>Our services</li>
              <li>Travel Package</li>
              <li>Destination</li>
            </ul>
          </div>
    </nav>
  )
}

export default Navbar
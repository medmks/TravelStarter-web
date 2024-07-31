const Navbar = () => {
  return (
    <nav className="absolute flex flex-row justify-start items-end px-10 sm:px-20 z-50 w-full  h-[100px]  ">
      <div className="flex sm:justify-start  ">
        <h1 className="font-outfit font-normal text-2xl sm:text-3xl  text-white">
          Travelellah
        </h1>
      </div>

      <div className=" hidden lg:flex flex-row justify-end w-full ">
        <ul className=" flex flex-row list-none gap-9 text-white font-outfitsubtext">
          <li className="underline underline-offset-4">Home</li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Our services</a>
          </li>
          <li>
            <a href="/">Travel Package</a>
          </li>
          <li>
            <a href="/">Destination</a>{" "}
          </li>
        </ul>
      </div>

      <div className="flex justify-end items-end w-full lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-9 h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;

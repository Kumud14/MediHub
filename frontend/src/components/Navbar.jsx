import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {

    const offset = window.scrollY;
    console.log(offset);
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // sticky navbar on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`${scrolled ? "sticky top-0 delay-500 ease animate-[stickyNavbar fill-mode-forwards] bg-slate-200" : ""} w-full h-46 px-2 py-2 shadow-md`}>

      <div className=" max-w-7xl mx-auto flex items-center justify-between py-2 md:px-4 lg:px-6 sticky top-0  ">

        {/* Title */}
        <div className="title">
          <h1 className="font-bold text-2xl">MediHub</h1>
        </div>

        {/* Nav Menus */}
        <div className="hidden md:block">
          <ul className="flex justify-between gap-8 items-center">
            <li>
              <Link
                to={"/"}
                className="text-sm font-semibold text-gray-600 relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-red-500 before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-sm font-semibold text-gray-600 relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-red-500 before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-gray-900"
              >
                All Doctors
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-sm font-semibold text-gray-600 relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-red-500 before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-gray-900"
              >
                Appointment
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-sm font-semibold text-gray-600 relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-red-500 before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-gray-900 md:hidden lg:block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-sm font-semibold text-gray-600 relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-red-500 before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-gray-900 md:hidden lg:block"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* buttons */}
        <div className="hidden space-x-2 md:block">
          <button
            type="button"
            className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10  hover:border border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Log In
          </button>
          <button
            type="button"
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

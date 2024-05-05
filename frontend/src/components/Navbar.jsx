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
    <div className={`${scrolled ? "sticky top-0 delay-500 ease animate-[stickyNavbar fill-mode-forwards]" : ""} w-full h-46 px-2 pb-1`}>

      <div className=" max-w-7xl mx-auto flex items-center justify-between py-4 md:px-4 lg:px-6 drop-shadow-md bg-body border px-2 ">

        {/* Title */}
        <div className="title">
          <h1 className="font-bold text-2xl text-primary">MediHub</h1>
        </div>

        {/* Nav Menus */}
        <div className="hidden md:block">
          <ul className="flex justify-between gap-8 items-center">
            <li>
              <Link
                to={"/"}
                className="text-sm font-semibold text-primary/80 relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-onhover before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/alldoctors"}
                className="text-sm font-semibold text-primary/80 relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-onhover before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-primary"
              >
                All Doctors
              </Link>
            </li>
            <li>
              <Link
                to={"/appointment"}
                className="text-sm font-semibold text-primary/80 relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-onhover before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-primary"
              >
                Appointment
              </Link>
            </li>
            <li>
              <Link
                to={"/aboutus"}
                className="text-sm font-semibold text-primary/80 relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-onhover before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-primary md:hidden lg:block"
              >
                About Us
              </Link>
            </li>

          </ul>
        </div>

        {/* buttons */}
        <div className="hidden space-x-2 md:block">
          <button
            type="button"
            className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-primary/80 hover:text-white hover:bg-secondary  
            border hover:border border-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border"
          >
            Log In
          </button>
          <button
            type="button"
            className="rounded-md border border-secondary px-3 py-2 text-sm font-semibold shadow-sm bg-secondary hover:bg-onhover text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

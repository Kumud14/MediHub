import React from "react";
import { Link } from "react-router-dom";

// icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="border-t border-slate-300 w-full h-auto shadow-md  px-4 py-2">
      {/* footer top */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-evenly px-4 py-2 sm:px-6 lg:px-8 my-4 md:flex-row">
        {/* title */}
        <div className="title">
          <h1 className=" relative font-bold text-gray-500 text-lg cursor-default before:block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-red-500 before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-gray-900">
            Quick Links
          </h1>
        </div>
        {/* menus */}
        <div className="my-3">
          <ul className="flex flex-col justify-between gap-3 items-center text-sm font-semibold text-gray-500 md:flex-row md:gap-8">
            <li>
              <Link
                to={"/"}
                className="relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-red-500 before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-gray-900"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-red-500 before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-gray-900"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-red-500 before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-gray-900"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="relative cursor-pointer before:block before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5 before:rounded-full before:bg-red-500 before:transition-all before:delay-150 before:ease-in-out hover:before:w-full hover:text-gray-900"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* icons */}
        <div className="flex items-center gap-4 ">
          <div className=" border border-black/50 rounded-full px-2 py-2 hover:bg-black/10 cursor-pointer">
            <FaInstagram />
          </div>
          <div className=" border border-black/50 rounded-full px-2 py-2 hover:bg-black/10 cursor-pointer">
            <FaLinkedin />
          </div>
          <div className=" border border-black/50 rounded-full px-2 py-2 hover:bg-black/10 cursor-pointer">
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="border-t border-slate-300 py-2">
        <div className=" mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0 ">
          {/* title */}
          <div className="title">
            <h1 className="font-bold text-2xl">MediHub</h1>
          </div>

          <div className="mt-4 md:mt-0 ">
            <p className="text-sm font-medium text-gray-500">
              © 2023 DevUI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

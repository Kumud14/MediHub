import React from "react";

import hero from "/hero.png";
// import appointment_icon from "/appointment_icon.svg";

import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <div className="w-full  px-2">

      <div className="max-w-7xl h-[70vh] mx-auto flex flex-col-reverse md:flex-row items-center justify-around pb-6 md:pd-2 md:px-4 lg:px-6 gap-12  bg-body rounded-md drop-shadow-md px-2">

        <div className=" flex flex-col justify-center md:w-[450px] gap-6 items-center">

          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight text-primary text-center ">

            Always caring about your health, we are here to help you
          </h1>

          <button className="flex w-fit items-center rounded-md border border-onhover px-2 md:px-3 py-2 text-sm font-semibold  shadow-sm hover:shadow-md  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-secondary hover:bg-onhover text-slate-100
          ">
            <img
              src="https://images.apollo247.in/images/ic-doctor.svg"
              alt="icon"
              className="mr-2 md:mr-4"
            />
            Book Your Appointment Now <IoIosArrowForward className="ml-2" />
          </button>
        </div>


        <div>
          <img src={hero} alt="" className="w-[250px] md:w-[350px] lg:w-[450px]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

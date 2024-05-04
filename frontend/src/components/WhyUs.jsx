import React from "react";

import { BiSolidFirstAid } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

function WhyUs() {
  return (
    <div className="mb-6 w-full  px-4 py-2">
      <h1 className=" my-4 text-2xl md:text-3xl font-bold tracking-tight text-black text-center">
        Why Choose Us?
      </h1>
      <div className=" max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 my-4  md:px-4 md:py-2 lg:px-8 md:flex-row md:gap-2 lg:gap-4 ">

        {/* Aid card  */}
        <div className=" shadow-sm hover:shadow-md my-4 w-fit rounded-md border text-center p-4 md:p-4 md:w-[300px] flex flex-col items-center gap-4">
          <BiSolidFirstAid className="size-24 text-white bg-sky-400 border-2 border-sky-800/50 rounded-full px-4 py-4 mb-4" />

          <div className="p-4 md:p-2 lg:p-0">
            <h1 className="text-md font-semibold uppercase text-gray-600">
              Advanced Technology
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              corrupti saepe repellat, eligendi ipsa esse!
            </p>
          </div>
        </div>
        {/* Doctors card */}
        <div className="shadow-sm hover:shadow-md w-fit rounded-md border text-center p-4 md:p-4 md:w-[300px] flex flex-col items-center gap-4">
          <FaUserDoctor className="size-24 text-white bg-sky-400 border-2 border-sky-800/50 rounded-full px-4 py-4 mb-4" />
          <div className="p-4 md:p-2 lg:p-0">
            <h1 className="text-md font-semibold uppercase text-gray-600">
              healthcare solutions
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              corrupti saepe repellat, eligendi ipsa esse!
            </p>
          </div>
        </div>
        {/* Ambulance card */}
        <div className="shadow-sm hover:shadow-md w-fit rounded-md border text-center p-4 md:p-4 md:w-[300px] flex flex-col items-center gap-4">
          <FaAmbulance className="size-24 text-white bg-sky-400 border-2 border-sky-800/50 rounded-full px-4 py-4 mb-4" />
          <div className="p-4 md:p-2 lg:p-0">
            <h1 className="text-md font-semibold uppercase text-gray-600">
              healthcare solutions
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              corrupti saepe repellat, eligendi ipsa esse!
            </p>
          </div>
        </div>
        {/* Ambulance card */}
        <div className="shadow-sm hover:shadow-md w-fit rounded-md border text-center p-4 md:p-4 md:w-[300px] flex flex-col items-center gap-4">
          <FaRegBuilding className="size-24 text-white bg-sky-400 border-2 border-sky-800/50 rounded-full px-4 py-4 mb-4" />
          <div className="p-4 md:p-2 lg:p-0">
            <h1 className="text-md font-semibold uppercase text-gray-600">
              healthcare solutions
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              corrupti saepe repellat, eligendi ipsa esse!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

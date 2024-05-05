import React from "react";

import { BiSolidFirstAid } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

function WhyUs() {
  return (
    <div className=" w-full px-2 ">
      <div className="py-12 max-w-7xl mx-auto flex flex-col items-center bg-body rounded-md px-2">
        <h1 className="my-12 text-2xl md:text-4xl font-bold tracking-tight text-primary text-center">
          Why Choose Us?
        </h1>
        <div className="flex flex-col md:flex-row md:gap-2 lg:gap-4 justify-between items-center gap-2 mt-5  md:flex-wrap md:justify-around lg:justify-around lg:flex-wrap">
          {/* Aid card  */}
          <div className="shadow-md my-4 w-fit rounded-md border border-secondary text-center p-4 md:p-4 md:w-[300px] flex flex-col items-center gap-4 hover:shadow-xl">
            <BiSolidFirstAid className="size-24 text-white bg-onhover border-2 border-primary rounded-full px-4 py-4 mb-4" />

            <div className="p-4 md:p-2 lg:p-0">
              <h1 className="text-md font-semibold uppercase text-primary/80">
                Advanced Technology
              </h1>
              <p className="mt-3 text-sm text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                corrupti saepe repellat, eligendi ipsa esse!
              </p>
            </div>
          </div>
          {/* Doctors card */}
          <div className="shadow-md my-4 w-fit rounded-md border border-secondary text-center p-4 md:p-4 md:w-[300px] flex flex-col items-center gap-4 hover:shadow-xl">
            <FaUserDoctor className="size-24 text-white bg-onhover border-2 border-primary rounded-full px-4 py-4 mb-4" />
            <div className="p-4 md:p-2 lg:p-0">
              <h1 className="text-md font-semibold uppercase text-primary/80">
                Advanced Technology
              </h1>
              <p className="mt-3 text-sm text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                corrupti saepe repellat, eligendi ipsa esse!
              </p>
            </div>
          </div>
          {/* Ambulance card */}
          <div className="shadow-md my-4 w-fit rounded-md border border-secondary text-center p-4 md:p-4 md:w-[300px] flex flex-col items-center gap-4 hover:shadow-xl">
            <FaAmbulance className="size-24 text-white bg-onhover border-2 border-primary rounded-full px-4 py-4 mb-4" />
            <div className="p-4 md:p-2 lg:p-0">
              <h1 className="text-md font-semibold uppercase text-primary/80">
                Advanced Technology
              </h1>
              <p className="mt-3 text-sm text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                corrupti saepe repellat, eligendi ipsa esse!
              </p>
            </div>
          </div>
          {/* Ambulance card */}
          <div className="shadow-md my-4 w-fit rounded-md border border-secondary text-center p-4 md:p-4 md:w-[300px] flex flex-col items-center gap-4 hover:shadow-xl">
            <FaRegBuilding className="size-24 text-white bg-onhover border-2 border-primary rounded-full px-4 py-4 mb-4" />
            <div className="p-4 md:p-2 lg:p-0">
              <h1 className="text-md font-semibold uppercase text-primary/80">
                Advanced Technology
              </h1>
              <p className="mt-3 text-sm text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                corrupti saepe repellat, eligendi ipsa esse!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

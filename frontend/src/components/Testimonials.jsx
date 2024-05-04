import React from "react";

// icons
import { CiStar } from "react-icons/ci";

function Testimonials() {
  return (
    <div className=" mb-6 w-full px-4 py-2">
      <div className="shadow-md max-w-7xl mx-auto flex items-center justify-between gap-4 my-4  md:px-4 md:py-2 lg:px-8 md:flex-row md:gap-2 lg:gap-4">
        <div className="flex flex-1 flex-col justify-between p-8">
          <div className="flex flex-col rounded-md bg-white">
            {/* ratings */}
            <div className="mb-4 flex space-x-2">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <div className="flex-1 pt-2">
              <p className="text-lg text-gray-800">
                “Finally, I&#x27;ve found a template that covers all bases for a
                bootstrapped startup. We were able to launch in days, not
                months.”
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
            <div className="flex items-center">
              <img
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt=""
              />
              <div className="ml-3 min-w-0">
                <p className="truncate text-base font-semibold text-gray-800">
                  Theresa Webb
                </p>
                <p className="truncate text-base text-gray-500">Web Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

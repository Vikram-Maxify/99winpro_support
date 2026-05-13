import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import emptyimg from "../assets/empty.png";
import { useNavigate } from "react-router-dom";

const Progressquery = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div class="w-full max-w-[600px] min-h-screen mx-auto bg-slate-50  relative">
        <div className="top-0 z-50 w-full bg-slate-50 shadow-md text-center sticky">
          <div className="flex relative items-center h-12 sm:h-14 px-4">
            {/* Back Button */}
            <div
              onClick={() => navigate("/")}
              className="absolute left-0 flex items-center p-5 cursor-pointer text-lg sm:text-xl"
            >
              <MdArrowBackIos className="text-2xl sm:text-3xl" />
            </div>

            {/* Title with Overflow Handling */}
            <div className="text-lg sm:text-xl font-normal max-w-[60%] mx-auto overflow-hidden text-ellipsis whitespace-nowrap">
              Progress query
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[40%]">
          <img src={emptyimg} alt="" className="object-cover w-[50%]" />
        </div>
        <span className="mt-3 text-gray-400 text-xl text-center block">
          No Data
        </span>
      </div>
    </div>
  );
};

export default Progressquery;

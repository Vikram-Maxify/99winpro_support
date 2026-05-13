

import React, { useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { getRecharge } from "../utils/slice";
import { useDispatch, useSelector } from "react-redux";

function Rechargepage() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth");
  const dispatch = useDispatch();

  const rechargDetails = useSelector((store) => store?.slice?.recharge);

  // console.log(rechargDetails?.data);

  useEffect(() => {
    dispatch(getRecharge(auth));
  }, []);

  return (
    <div className="w-full max-w-[600px] mx-auto min-h-screen bg-gray-100 ">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-gray-100 py-3 sm:py-4 shadow">

        <div className="flex items-center justify-between px-2 sm:px-4">
         

             <div
            onClick={() => navigate("/")}
            className="absolute left-0 p-5 flex items-center cursor-pointer"
          >
            <MdArrowBackIos className="text-lg sm:text-2xl" />
          </div>

          <h1 className="text-lg sm:text-xl font-semibold text-center flex-grow -ml-6">
            Recharge History
          </h1>
        </div>
      </div>

      {/* Recharge Section */}
      <div className="space-y-4 p-2 ">
        {rechargDetails?.data?.length > 0 ? (
          rechargDetails.data.map((item, i) => (
            
            <div
              key={i}
              className="bg-white rounded p-2 shadow-sm space-y-2"
            >
              {/* Top Section */}
              <div className="flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)] pb-2 ">
                <span className="text-white bg-green-600 px-3 py-1 rounded text-xs sm:text-sm">
                  Recharge
                </span>
                <span
                  className={`text-xs sm:text-sm font-medium ${
                    item.status === 0
                      ? "text-blue-500"
                      : item.status === 1
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.status === 0
                    ? "To Be Paid"
                    : item.status === 1
                    ? "Success"
                    : "Failed"}
                </span>
              </div>


              {/* Amount */}
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600  ">Amount</span>
                <span className="text-yellow-500">{item?.money}</span>
              </div>

              {/* Type */}
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Type</span>
                <span className="text-gray-500">{item?.type}</span>
              </div>

              {/* Time */}
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Time</span>
                <span className="text-gray-500">{item?.time}</span>
              </div>

              {/* Order Number */}
              <div className="flex justify-between text-sm sm:text-base items-center">
                <span className="text-gray-600">Order Number</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-700 break-all">{item?.id_order}</span>
                  <IoCopyOutline className="text-gray-600 cursor-pointer" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  onClick={() => navigate("/deposite")}
                  className="bg-[#FF6475] w-full text-yellow-50 py-[6px] rounded-full text-xs sm:text-base font-medium"
                >
                  Submit Receipt 
                </button>
              </div>
              
            </div>
            
          ))
        ) : (
          <div className="text-center text-gray-400 text-lg sm:text-xl mt-6">
            No more data
          </div>
        )}

        
      </div>
    </div>
  );
}

export default Rechargepage;

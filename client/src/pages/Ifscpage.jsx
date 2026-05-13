

import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ifscModification } from "../utils/slice";
import { useDispatch } from "react-redux";

const IfscPage = () => {
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupStatus, setPopupStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const token  =  localStorage.getItem("auth");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    const formData = new FormData();

    formData.append("BankNumber" , data.BankNumber)
    formData.append("IFSCCode" , data.IFSCCode)
    formData.append("auth" , token);

    dispatch(ifscModification(formData)).then((res) => {
      if (res.payload?.success) {
        setShowPopup(true);
        setPopupStatus("success");
        setPopupMessage("Your request has been successfully submitted. We'll get back to you shortly.");
      } else {
        setShowPopup(true);
        setPopupStatus("error");
        setPopupMessage(res.payload?.message || "Something went wrong. Please try again.");
      }
    });
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 4000);

  };

  return (
    <div className="w-full max-w-[600px] min-h-screen mx-auto bg-slate-50 relative">
      {/* Sticky Header */}
      <div className="top-0 z-50 w-full bg-slate-50 shadow-md text-center sticky">
        <div className="flex relative items-center h-12 sm:h-14 px-4">
          {/* Back Button */}
          <div
            onClick={() => navigate("/")}
            className="absolute left-0 p-5 flex items-center cursor-pointer text-lg sm:text-xl"
          >
            <MdArrowBackIos className="text-2xl sm:text-3xl" />
          </div>

          {/* Title */}
          <div className="text-lg sm:text-xl font-normal max-w-[60%] mx-auto overflow-hidden text-ellipsis whitespace-nowrap">
            IFSC Modification
          </div>

          {/* Help Icon */}
          <div className="absolute right-4 flex items-center text-2xl sm:text-3xl text-[#FF6475]">
            <GoQuestion />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative p-4 sm:p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Bank Number Input */}
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
            <label className="block text-sm sm:text-lg lg:text-xl text-left text-gray-800 mb-2">
              Bank number <span className="text-red-500">*</span>
            </label>
            <div className="bg-white rounded-md p-3 sm:p-4 shadow-md">
              <input
                {...register("BankNumber", {
                  required: "Please enter Bank Card Number",
                })}
                type="text"
                placeholder="Please enter Bank Card Number"
                className="block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg"
              />
            </div>
            {errors.BankNumber && (
              <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                {errors.BankNumber.message}
              </div>
            )}
          </div>

          {/* IFSC Code Input */}
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-4">
            <label className="block text-left text-sm sm:text-lg lg:text-xl text-gray-800 mb-2">
              Correct IFSC Code <span className="text-red-500">*</span>
            </label>
            <div className="bg-white rounded-md p-3 sm:p-4 shadow-md">
              <input
                {...register("IFSCCode", {
                  required: "Please enter IFSC",
                })}
                type="text"
                placeholder="Please enter IFSC"
                className="w-full bg-transparent border-none focus:outline-none text-sm sm:text-lg"
              />
            </div>
            {errors.IFSCCode && (
              <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                {errors.IFSCCode.message}
              </div>
            )}
          </div>

          {/* Footer with Confirm Button */}
          <footer className="flex w-full justify-center bg-slate-50 py-4 mt-5">
          <button
      type="submit"
      className={`bg-[#FF6475] text-yellow-50 h-[50px] sm:h-[60px] w-[90%] sm:w-[80%]  text-lg sm:text-xl md:text-2xl rounded-full font-medium ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isDisabled}
    >
      {isDisabled ? "Submitting..." : "Confirm "}
    </button>
          </footer>
        </form>
      </div>
      {showPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
    <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in">
      <div className="p-6">
        {/* Dynamic Icon Based on Success or Error */}
        <div className="flex justify-center mb-4">
          {popupStatus === "success" ? (
            <svg 
              className="w-12 h-12 text-green-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          ) : (
            <svg 
              className="w-12 h-12 text-red-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          )}
        </div>

        {/* Dynamic Title Based on Response */}
        <h3 className={`text-xl font-semibold mb-2 text-center ${popupStatus === "success" ? "text-green-700" : "text-red-700"}`}>
          {popupStatus === "success" ? "Request Submitted!" : "Request Failed!"}
        </h3>

        {/* Dynamic Message Based on Response */}
        <p className="text-gray-600 mb-6 text-center">{popupMessage}</p>

        {/* Close Button */}
        <button
          className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6475] focus:ring-offset-2"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default IfscPage;

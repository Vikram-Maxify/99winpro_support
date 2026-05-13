
" decress deposit proof and more then 1 day box section size dcesses spaces "
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { TbPhotoUp } from "react-icons/tb";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { depositNotRecieved } from "../utils/slice";

const Depositepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("auth");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupStatus, setPopupStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("OrderAmount", data.OrderAmount);
    formData.append("OrderNumber", data.OrderNumber);
    formData.append("ReceiverUPIID", data.ReceiverUPIID);
    formData.append("UTRNumber", data.UTRNumber);
    formData.append("auth", token);
    formData.append("uid", data.uid);

    if (data.proof1 && data.proof1[0]) {
      formData.append("proof1", data.proof1[0]);
    }

    if (data.proof2 && data.proof2[0]) {
      formData.append("proof2", data.proof2[0]);
    }

    // Debugging FormData
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    dispatch(depositNotRecieved(formData)).then((res) => {
    
      if (res.payload?.success) {
        setShowPopup(true);
        setPopupStatus("success");
        setPopupMessage(res.payload?.message || "Your request has been successfully submitted. We'll get back to you shortly.");
      } else {
        setShowPopup(true);
        setPopupStatus("error");
        setPopupMessage(res.payload?.message || "Something went wrong. Please try again.");
      }
    });

    setIsDisabled(true); // Disable the button
    // Re-enable the button after 3 seconds
    setTimeout(() => {
      setIsDisabled(false);
    }, 3000);;
  };

  return (
    <div>

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


      <div className="w-full max-w-[600px] min-h-screen mx-auto bg-slate-50 relative">
        <div className="top-0 z-50 w-full bg-slate-50 shadow-md text-center sticky">
          <div className="flex relative items-center h-14 px-4 sm:px-6">
            {/* Back Button */}
            <div
              onClick={() => navigate("/")}
              className="absolute left-4 flex items-center cursor-pointer text-base"
            >
              <MdArrowBackIos className="text-2xl sm:text-3xl" />
            </div>

            {/* Title - Responsive Text Wrapping */}
            <div className="text-lg sm:text-2xl font-normal mx-auto truncate whitespace-normal break-words text-center max-w-xs sm:max-w-md">
              Deposit Not Received
            </div>

            {/* Help Icon */}
            <div className="absolute right-4 flex items-center text-2xl sm:text-3xl">
              <GoQuestion className="text-[#FF6475]" />
            </div>
          </div>
        </div>

        <div className="relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="UID"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      UID  <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("UID", {
                        required: "Please enter UID",
                      })}
                      type="text"
                      id="UID"
                      placeholder="Please enter UID"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${errors.UID ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.UID && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.UID.message}
                    </div>
                  )}
                </div>
              </div>


              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="UTRNumber"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      UTR number <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("UTRNumber", {
                        required: "Please enter UTR",
                      })}
                      type="text"
                      id="UTRNumber"
                      placeholder="Please enter UTR"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${errors.UTRNumber ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.UTRNumber && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.UTRNumber.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="ReceiverUPIID"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      Receiver UPI ID <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("ReceiverUPIID", {
                        required: "Please enter UPI ID",
                      })}
                      type="text"
                      id="ReceiverUPIID"
                      placeholder="Please enter UPI ID"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${errors.ReceiverUPIID ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.ReceiverUPIID && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.ReceiverUPIID.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="OrderNumber"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      Order Number <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("OrderNumber", {
                        required: "Please enter Order Number",
                      })}
                      type="text"
                      id="OrderNumber"
                      placeholder="Please enter order number"
                      className="block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg"
                    />
                  </div>

                  {/* Error Message */}
                  {errors.OrderNumber && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.OrderNumber.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="OrderAmount"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      Order Amount <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("OrderAmount", {
                        required: "Please enter Order Amount",
                      })}
                      type="text"
                      id="OrderAmount"
                      placeholder="Please enter amount"
                      className="block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg"
                    />
                  </div>

                  {/* Error Message */}
                  {errors.OrderAmount && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.OrderAmount.message}
                    </div>
                  )}
                </div>
              </div>


              {/* first */}

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="proof1">
                    Deposit proof receipt detail
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <label
                    htmlFor="proof1"
                    className="min-h-5 bg-white rounded-md p-2 shadow-lg flex flex-col items-center  w-[30%] cursor-pointer"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-3xl" />
                      </div>
                      <span className="text-lg ">Photo</span>
                    </div>

                    <input
                      {...register("proof1", {
                        required: "Please upload deposit proof",
                      })}
                      type="file"
                      id="proof1"
                      className="hidden"
                    />
                  </label>

                  {/* Error Message */}
                  {errors.proof1 && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.proof1.message}
                    </div>
                  )}
                </div>
              </div>



              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="proof2">
                    More than 1 Day, Attach video statement using 2 different
                    devices <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <label
                    htmlFor="proof2"
                    className="min-h-5 bg-white rounded-md p-2 shadow-lg flex flex-col items-center w-[30%] cursor-pointer"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <MdOutlineDriveFolderUpload className="text-3xl" />
                      </div>
                      <span className="text-lg ">Upload</span>
                    </div>

                    <input
                      {...register("proof2", {
                        required: "Please upload video statement",
                      })}
                      type="file"
                      id="proof2"
                      className="hidden"
                    />
                  </label>

                  {/* Error Message */}
                  {errors.proof2 && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.proof2.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <footer className="flex w-full justify-center bg-slate-50 py-4">
              <button
                type="submit"
                className=" h-[40px]  w-[90%]  bg-[#FF6475] text-yellow-50 text-lg sm:text-xl md:text-2xl rounded-full font-medium m-5"
                onClick={handleSubmit}
                disabled={isDisabled}
              >
                {isDisabled ? "Submitting..." : "Confirm"}
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Depositepage;

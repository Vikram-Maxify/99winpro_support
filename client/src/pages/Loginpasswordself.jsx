import React, { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import eye from "../assets/download.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { otpSend, updatePassword } from "../utils/slice";
import { useDispatch } from "react-redux";

const Loginpasswordself = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupStatus, setPopupStatus] = useState("");
  const token = localStorage.getItem("auth");
  const [timeLeft, setTimeLeft] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // ✅ Used to get phone input value dynamically
  } = useForm();

  const phone = watch("phone");


  const startTimer = () => {
    setTimeLeft(30); // Start the countdown from 30 seconds
};

useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;

    const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
}, [timeLeft]);


  const sendOtp = () => {
    if (!phone) {
      return;
    }

    dispatch(otpSend(phone)).then((res) => {
      if (res.payload.message === "OTP sent successfully") {
        setShowPopup(true);
        setPopupStatus("success");
        setPopupMessage("otp sent successfully.");
        startTimer()
      } else {
        setShowPopup(true);
        setPopupStatus("error");
        setPopupMessage(res.payload?.message || "Something went wrong. Please try again.");
      }    
    });
  };

  const onSubmit = (data) => {
    setShowPopup(true);
    const formData = new FormData();
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("otp", data.otp);
    formData.append("auth", token);

    console.log("Form submitted with:", Object.fromEntries(formData));
    dispatch(updatePassword(formData)).then((res) => {
      if (res.payload?.success) {
        setShowPopup(true);
        setPopupStatus("success");
        setPopupMessage("Your password has been changed successfully.");
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
    }, 4000);
  };

  return (
    <div>
      <div className="w-full max-w-[600px] min-h-screen mx-auto bg-slate-50 relative">
        {/* Header */}
        <div className="top-0 z-50 w-full bg-slate-50 shadow-md text-center sticky">
          <div className="flex relative items-center h-14 px-4 sm:px-6">
            {/* Back Button */}
            <div
              onClick={() => navigate("/")}
              className="absolute left-4 flex items-center cursor-pointer text-base"
            >
              <MdArrowBackIos className="text-2xl sm:text-3xl" />
            </div>

            {/* Title */}
            <div className="text-lg sm:text-2xl font-normal mx-auto truncate whitespace-normal break-words text-center max-w-xs sm:max-w-md">
              Self-service Change Password
            </div>

            {/* Help Icon */}
            <div className="absolute right-4 flex items-center text-2xl sm:text-3xl">
              <GoQuestion className="text-[#FF6475]" />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="relative p-4 sm:p-6 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full text-gray-800 sm:text-xl">
              {/* New Password Section */}
              <div className="relative p-4 sm:p-6 w-full">
                <div className="text-left mb-3">
                  <label htmlFor="new-password">
                    New Password <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="relative font-normal text-gray-500">
                  <div className="flex bg-white rounded-md shadow-xl items-center">
                    <input
                      {...register("password", {
                        required: "Please enter a new password",
                      })}
                      type="password"
                      placeholder="Please enter a new password"
                      name="password"
                      className="block w-full p-5 focus:outline-none bg-transparent border-none text-left"
                    />
                    <div className="p-2 cursor-pointer">
                      <img src={eye} alt="Toggle visibility" />
                    </div>
                  </div>
                  {/* Error Message */}
                  {errors.password && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.password.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Phone Number & OTP Section */}
              <div className="relative p-4 sm:p-6 w-full">
                <div className="text-left mb-3">
                  <label htmlFor="phone">
                    Registered phone number to receive OTP{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="relative font-normal text-gray-500">
                  <div className="flex flex-col sm:flex-row bg-white rounded-md shadow-xl items-center">
                    <input
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      type="text"
                      placeholder="Enter your phone number"
                      name="phone"
                      className="block w-full p-5 focus:outline-none bg-transparent border-none text-left"
                    />
                    <div className=" mr-2 sm:mt-0 sm:ml-4 flex-shrink-0 mb-2">
                      <button
                        type="button" // ✅ Prevent form submission
                        className="w-full sm:w-auto px-4 py-2 text-base sm:text-lg bg-[#FF6475] text-white rounded-md cursor-pointer transition-opacity"
                        onClick={sendOtp}
                        disabled={timeLeft>0?true:false}
                      >
                        {timeLeft>0?timeLeft:"Send Verification Code"}
                      </button>
                    </div>
                  </div>
                  {/* Error Message */}
                  {errors.phone && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.phone.message}
                    </div>
                  )}
                </div>
              </div>

              {/* OTP Section */}
              <div className="relative p-4 sm:p-6 w-full">
                <div className="text-left mb-3">
                  <label htmlFor="otp">
                    OTP <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="relative font-normal text-gray-500">
                  <div className="flex bg-white rounded-md shadow-xl items-center">
                    <input
                      {...register("otp", {
                        required: "Please enter OTP",
                      })}
                      type="text"
                      placeholder="Enter OTP"
                      name="otp"
                      className="block w-full p-5 focus:outline-none bg-transparent border-none text-left"
                    />
                  </div>
                  {/* Error Message */}
                  {errors.otp && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.otp.message}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <footer className="flex w-full justify-center bg-slate-50 py-4">
              <button
                type="submit"
                className={`bg-[#FF6475] h-[50px] sm:h-[60px] w-[90%] sm:w-[80%] text-white text-lg sm:text-xl md:text-2xl rounded-full font-medium ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={isDisabled}
              >
                {isDisabled ? "Submitting..." : "Confirm"}
              </button>
            </footer>
          </form>
        </div>
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

export default Loginpasswordself;

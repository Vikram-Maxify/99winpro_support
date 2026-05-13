import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { TbPhotoUp } from "react-icons/tb";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { gameProblem } from "../utils/slice";
import { useDispatch } from "react-redux";

const Gameproplems = () => {
  const navigate = useNavigate();
  const dispatch  =  useDispatch()
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
    // setShowPopup(true);
       console.log(data);
       const formData = new FormData();

  // Append text fields
       formData.append("Content", data.Content);
       formData.append("auth" , token)
     
       // Append file fields if they exist
       if (data.Photo && data.Photo[0]) {
         formData.append("Photo", data.Photo[0]);
       }

       dispatch(gameProblem(formData)).then((res) => {
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
       }, 3000);

  };

  return (
    <div>
      <div className="w-full max-w-[600px] min-h-screen mx-auto bg-slate-50  relative">
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
              Game Proplems
            </div>

            {/* Help Icon */}
            <div className="absolute right-4 flex items-center text-2xl sm:text-3xl">
              <GoQuestion className="text-[#FF6475]" />
            </div>
          </div>
        </div>
        <div className="relative mt-4">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div>
              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl">
                <div className="flex flex-col text-left mb-2 sm:mb-3">
                  <label htmlFor="issue" className="text-xl">
                    Explain the issue that happened to you inside the game
                    clearly and in detail
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="relative text-left text-gray-500">
                  <div
                    {...register("Content", {
                      required: "Please enter content",
                    })}
                    className="bg-white rounded-md p-4 sm:p-6 shadow-md"
                  >
                    <textarea
                      id="Content"
                      name="Content"
                      placeholder="Please enter content"
                      className="block w-full h-24 resize-none  focus:outline-none p-3 text-base sm:text-xl rounded-md"
                    ></textarea>
                  </div>
                  <div className="mt-2 sm:mt-3 text-gray-600 text-right text-sm sm:text-xl">
                    <span>0/500</span>
                  </div>
                  {/* Error Message */}
                  {errors.Content && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.Content.message}
                    </div>
                  )}
                </div>
              </div>

              {/* <div className="relative p-6 w-full overflow-hidden text-gray-800 text-xl">
                <div className="flex w-full text-left mb-3">
                  <label htmlFor=" ">Attach Photo</label>
                </div>
                <div className="overflow-visible relative text-right align-middle break-words font-normal text-gray-500">
                  <div className="min-h-5 bg-white rounded-md p-4 shadow-lg items-center w-full sm:w-[30%]">
                    <div className="bg-transparent p-0 justify-center cursor-default flex items-center min-h-5 text-left resize-none">
                      <div className="">
                        <div className="p-2">
                          <TbPhotoUp className="text-5xl" />
                        </div>
                        <span className="text-xl p-2 cursor-pointer m-auto">
                          Photo
                        </span>
                        <input
                      {...register("Photo", {
                        required: "Category Selection",
                      })}
                      type="file"
                      id="Photo"
                      placeholder=""
                      name="Photo"
                      className={` block  w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                        errors.AddressScreenshot
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-xl">
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="Photo">Attach Photo</label>
                </div>
                <label 
                  htmlFor="Photo" 
                  className="overflow-visible relative text-right align-middle break-words font-normal text-gray-500 cursor-pointer"
                >
                  <div className="min-h-5 bg-white rounded-md p-4 shadow-lg items-center w-[45%] flex justify-center">
                    <div className="text-center">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 m-auto">
                        Photo
                      </span>
                    </div>
                  </div>
                  <input
                    {...register("Photo", {
                      required: "Category Selection",
                    })}
                    type="file"
                    id="Photo"
                    name="Photo"
                    className="hidden"
                  />
                </label>
              </div>
              



            
            </div>
            <footer className="flex w-full justify-center bg-slate-50 py-4 ">
            <button
      type="submit"
      className={`bg-[#FF6475] h-[50px] sm:h-[60px] w-[90%] sm:w-[80%] text-white text-lg sm:text-xl md:text-2xl rounded-full font-medium ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
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

export default Gameproplems;



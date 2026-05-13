import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { TbPhotoUp } from "react-icons/tb";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { activityBonus } from "../utils/slice";
import { useDispatch } from "react-redux";

const ActivityBonus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupStatus, setPopupStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const token  =  localStorage.getItem("auth");
  console.log()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
       console.log(data);
       const formData = new FormData();

        // Append text fields
             formData.append("content", data.content);
       formData.append("TirangaID", data.TirangaID);
       formData.append("auth" , token)
     
       // Append file fields if they exist
       if (data.winningRecord && data.winningRecord[0]) {
         formData.append("winningRecord", data.winningRecord[0]);
       }
       
       dispatch(activityBonus(formData)).then((res) => {
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
       setIsDisabled(true); 

       // Re-enable the button after 3 seconds
       setTimeout(() => {
         setIsDisabled(false);
       }, 3000);

  };

  return (
    <div className="w-full max-w-[600px] min-h-screen mx-auto bg-slate-50 relative ">
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
            Activity Bonus
          </div>

          {/* Help Icon */}
          <div className="absolute right-4 flex items-center text-2xl sm:text-3xl">
            <GoQuestion className="text-[#FF6475]" />
          </div>
        </div>
      </div>

      <div className="relative mt-4 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-gray-800 text-lg sm:text-xl">
            <label className="block mb-2 text-left">
              Explain clearly bonus that you want to claim{" "}
              <span className="text-red-500">*</span>
            </label>
            <div
              {...register("content", {
                required: "Please enter content",
              })}
              className="bg-white rounded-md p-4 shadow-lg"
            >
              <textarea
                name="content"
                placeholder="Please enter content"
                className="w-full h-24 p-2 bg-transparent border-0 resize-none focus:outline-none"
              ></textarea>
            </div>
            <div className="mt-2 text-gray-600 text-xl text-right">0/500</div>
            {/* Error Message */}
            {errors.content && (
              <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                {errors.content.message}
              </div>
            )}
          </div>

          <div className="text-gray-800 text-lg sm:text-xl mt-6">
            <label className="block mb-2 text-left">
              Game ID <span className="text-red-500">*</span>
            </label>
            <div className="bg-white rounded-md shadow-lg">
              <input
                {...register("TirangaID", {
                  required: "Please enter User ID",
                })}
                type="text"
                placeholder="Please enter User ID"
                className="w-full bg-transparent p-5  border-0 focus:outline-none"
              />
            </div>
            {/* Error Message */}
            {errors.TirangaID && (
              <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                {errors.TirangaID.message}
              </div>
            )}
          </div>


          

          

          <div className="text-gray-800 text-lg sm:text-xl mt-6">
             <label className="block mb-2 text-left" htmlFor="winningRecord">
               Screenshot of winning record 1{" "}
               <span className="text-red-500">*</span>
             </label>
             <label
               htmlFor="winningRecord"
               className="bg-white rounded-md p-6 shadow-lg flex justify-center w-[45%] cursor-pointer"
             >
               <div className="text-center">
                 <TbPhotoUp className="text-5xl" />
                 <span className="block text-xl">Photo</span>
               </div>
               <input
                 {...register("winningRecord", {
                   required: "Category Selection",
                 })}
                 type="file"
                 id="winningRecord"
                 name="winningRecord"
                 className="hidden"
               />
             </label>
             {/* Error Message */}
             {errors.winningRecord && (
               <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                 {errors.winningRecord.message}
               </div>
             )}
          </div>
          <footer className="flex justify-center bg-slate-50 py-4 mt-5">
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
          className="w-full px-4 py-2 bg-[#FF6475] hover:bg-red-500 text-white font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6475] focus:ring-offset-2"
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

export default ActivityBonus;

import React ,{useEffect, useState} from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { TbPhotoUp } from "react-icons/tb";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usdtAddress } from "../utils/slice";
import { useDispatch } from "react-redux";

const AddusdtAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupStatus, setPopupStatus] = useState("");
  let token
   useEffect(()=>{
     token  =  localStorage.getItem("auth");
    console.log(token ,"token value")
  
    },[])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShowPopup(true);
      console.log(data);
      const formData = new FormData();

      // Append text fields
      formData.append("TirangaID", data.TirangaID);
      formData.append("USDTWalletAddress", data.USDTWalletAddress);
      formData.append("auth" , localStorage.getItem("auth"));
    
      // Append file fields if they exist
      if (data.AddressScreenshot && data.AddressScreenshot[0]) {
        formData.append("AddressScreenshot", data.AddressScreenshot[0]);
      }
    
      if (data.IdentityCard && data.IdentityCard[0]) {
        formData.append("IdentityCard", data.IdentityCard[0]);
      }
    
      if (data.LatestDeposit && data.LatestDeposit[0]) {
        formData.append("LatestDeposit", data.LatestDeposit[0]);
      }
      console.log(formData);
      dispatch(usdtAddress(formData)).then((res) => {
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
      <div class="w-full max-w-[600px] min-h-screen mx-auto bg-slate-50  relative">
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
              Add USDT Address
            </div>

            {/* Help Icon */}
            <div className="absolute right-4 flex items-center text-2xl sm:text-3xl">
              <GoQuestion className="text-[#FF6475]" />
            </div>
          </div>
        </div>

        <div className="relative">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div>
              <div className="relative pt-4  w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="tirangaID"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      Game ID <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("TirangaID", {
                        required: "Please enter User ID",
                      })}
                      type="text"
                      id="TirangaID"
                      placeholder="Please enter User ID"
                      name="TirangaID"
                      className="block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg"
                    />
                  </div>

                  {/* Error Message */}
                  {errors.TirangaID && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.TirangaID.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="tirangaID"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      USDT Address<span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("USDTWalletAddress", {
                        required: "Please enter USDT address",
                      })}
                      type="text"
                      id="USDTWalletAddress"
                      placeholder="Please enter USDT address"
                      name="USDTWalletAddress"
                      className="block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg"
                    />
                  </div>

                  {/* Error Message */}
                  {errors.USDTWalletAddress && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.USDTWalletAddress.message}
                    </div>
                  )}
                </div>
              </div>

              {/* //new block-1 */}

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
               {/* Label */}
               <div className="flex w-full text-left mb-3">
                 <label htmlFor="AddressScreenshot" className="text-sm sm:text-lg lg:text-xl">
                   USDT Address Screenshot{" "}
                   <span className="text-red-500">*</span>
                 </label>
               </div>
               
               {/* Upload Box - Now Left-Aligned */}
               <div className="overflow-visible relative text-left font-normal text-gray-500">
                 <label
                   htmlFor="AddressScreenshot"
                   className="min-h-5 bg-white rounded-md p-6 shadow-lg flex flex-col items-center w-[45%] cursor-pointer"
                 >
                   <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                     <div className="p-2">
                       <TbPhotoUp className="text-5xl" />
                     </div>
                     <span className="text-xl p-2">Photo</span>
                   </div>
                   
                   <input
                     {...register("AddressScreenshot", {
                       required: "Category Selection",
                     })}
                     type="file"
                     id="AddressScreenshot"
                     name="AddressScreenshot"
                     className="hidden"
                   />
                 </label>
                 
                 {/* Error Message */}
                 {errors.AddressScreenshot && (
                   <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                     {errors.AddressScreenshot.message}
                   </div>
                 )}
               </div>
             </div>

            {/* new box-2 */}

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
               {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="IdentityCard" className="text-sm sm:text-lg lg:text-xl">
                    Identity Card <span className="text-red-500">*</span>
                  </label>
                </div>
                
                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <label
                    htmlFor="IdentityCard"
                    className="min-h-5 bg-white rounded-md p-6 shadow-lg flex flex-col items-center w-[45%] cursor-pointer"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2">Photo</span>
                    </div>
                    
                    <input
                      {...register("IdentityCard", {
                        required: "Please upload video statement",
                      })}
                      type="file"
                      id="IdentityCard"
                      className="hidden"
                    />
                  </label>
                  
                  {/* Error Message */}
                  {errors.IdentityCard && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.IdentityCard.message}
                    </div>
                  )}
                </div>
              </div>

             {/*  */}
             <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
  {/* Label */}
  <div className="flex w-full text-left mb-3">
    <label htmlFor="LatestDeposit" className="text-sm sm:text-lg lg:text-xl">
      Latest Deposit Receipt 1{" "}
      <span className="text-red-500">*</span>
    </label>
  </div>
  
  {/* Upload Box - Now Left-Aligned */}
             <div className="overflow-visible relative text-left font-normal text-gray-500">
               <label
                 htmlFor="LatestDeposit"
                 className="min-h-5 bg-white rounded-md p-6 shadow-lg flex flex-col items-center w-[45%] cursor-pointer"
               >
                 <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                   <div className="p-2">
                     <TbPhotoUp className="text-5xl" />
                   </div>
                   <span className="text-xl p-2">Photo</span>
                 </div>
                 
                 <input
                   {...register("LatestDeposit", {
                     required: "Please upload video statement",
                   })}
                   type="file"
                   id="LatestDeposit"
                   className="hidden"
                 />
               </label>
               
               {/* Error Message */}
               {errors.LatestDeposit && (
                 <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                   {errors.LatestDeposit.message}
                 </div>
               )}
             </div>
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

export default AddusdtAddress;

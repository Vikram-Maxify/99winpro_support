import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { TbPhotoUp } from "react-icons/tb";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ChangeIdpage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted with data: " + JSON.stringify(data));
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
              Change ID Login Password
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
              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="tirangaID"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      New Password :<span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("new", {
                        required: "Please enter content",
                      })}
                      type="text"
                      id="new"
                      placeholder="Please enter content"
                      name="UTR number"
                      className="block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg"
                    />
                  </div>

                  {/* Error Message */}
                  {errors.new && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.new.message}
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
                      Register Phone Number :
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("register", {
                        required: "Please enter content",
                      })}
                      type="text"
                      id="register"
                      placeholder="Please enter content"
                      className="block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg"
                    />
                  </div>

                  {/* Error Message */}
                  {errors.register && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.register.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    Video holding : Identity Card, Passbook, Piece of paper with
                    today's date written on it{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div
                    {...register("paper", {
                      required: "Upload file cannot be empty",
                    })}
                    className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <MdOutlineDriveFolderUpload className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Upload</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.paper && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.paper.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    Identity Card <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div
                    {...register("card", {
                      required: "Upload photo cannot be empty",
                    })}
                    className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Photo</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.card && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.card.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    Passbook Bank <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div
                    {...register("bank", {
                      required: "Upload photo cannot be empty",
                    })}
                    className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Photo</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.bank && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.bank.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    Latest Deposit Receipt Proof 1
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div
                    {...register("deposite", {
                      required: "Upload photo cannot be empty",
                    })}
                    className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Photo</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.deposite && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.deposite.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    Latest Deposit Receipt Proof 2
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div
                    {...register("proof", {
                      required: "Upload photo cannot be empty",
                    })}
                    className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Photo</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.proof && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.proof.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <footer className="flex w-full justify-center bg-slate-50 py-4 ">
              <button className="bg-[#FF6475] h-[50px] sm:h-[60px] w-[90%] sm:w-[80%] text-white text-lg sm:text-xl md:text-2xl rounded-full font-medium m-5">
                Confirm
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeIdpage;

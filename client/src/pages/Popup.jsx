import React from "react";

const Popup = () => {
  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-[2001]  ">
        <div className="z-[2001] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden w-[40%] text-2xl bg-white rounded-xl backface-hidden transition-opacity duration-300 fixed max-h-full">
          <div className="flex items-center min-h-5">
            <div className="flex-1 p-[10%] px-5 overflow-y-auto text-center text-2xl leading-2 whitespace-pre-wrap break-words">
              Cannot receive verification code?
            </div>
          </div>
          <div className="relative flex overflow-hidden select-none mb-5">
            <button className="text-[#FF6475] flex-1 w-full bg-white relative inline-block text-center cursor-pointer h-full justify-center items-center">
              <span>Can Receive</span>
            </button>
            <button className="text-[#FF6475] flex-1 w-full bg-white relative inline-block text-center cursor-pointer h-full justify-center items-center">
              <span>Cannot Receive</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;

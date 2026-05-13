import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import icon1 from "../assets/img1.png";
import icon2 from "../assets/img2.png";
import icon3 from "../assets/img3.png";
import icon4 from "../assets/img4.png";
import icon5 from "../assets/img5.png";
import icon6 from "../assets/img6.png";
import icon7 from "../assets/img7.png";
import icon8 from "../assets/img8.png";
import icon9 from "../assets/img9.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentUrl = window.location.href;

  useEffect(() => {
    const token = localStorage.getItem("auth");
    console.log(token, "token value")

  }, [])

  return (
    <div>
      <div className="w-full max-w-[500px] min-h-screen mx-auto  bg-gray-100  relative ">
        <div class="relative text-centerselect-none">
          {/* Navbar */}
          <div className="relative z-10 leading-[1.5] text-center select-none">
            <div className="flex items-center justify-between h-14 px-4 md:px-6">
              <Link to={"https://1xclube.com"}>
                <AiOutlineHome className="text-3xl cursor-pointer" />
              </Link>
              <h2 className="text-lg md:text-2xl font-normal text-gray-800 truncate">
                Self Service Center
              </h2>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src={logo}
                  alt="logo"
                  className="w-8 h-8 md:w-8 md:h-8 rounded-full"
                />
                <span className="text-sm md:text-lg font-medium">English</span>
              </div>
            </div>
          </div>
        </div>

        {/* banner */}
        <div className="w-full mt-0">
          <div className="relative">
            <img src="https://i.ibb.co/x8Lt62f7/banner.jpg" alt="" />
          </div>
        </div>

        {/* self service */}
        <div className="p-2">
          <h2 className="text-xl font-normal mb-5 sm:text-lg md:text-xl sm:mb-4 sm:mr-0 md:mr-[60%]">
            Self Service
          </h2>
          <ul className="bg-white text-white list-none p-5 ">
            <li
              onClick={() => navigate("/recharge")}
              className="w-full h-[1.6rem] pt-3 pb-8 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src="https://i.ibb.co/1YHZ7Txp/img1.png" alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Deposit Not Receive
                </span>
              </div>
              <div className="">
                <IoIosArrowForward className="text-gray-500 text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/withdrawal")}
              className="w-full h-[1.6rem] py-8 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src="https://i.ibb.co/prfCwGbP/img2.png" alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Withdrawal problem
                </span>
              </div>
              <div className="">
                <IoIosArrowForward className="text-gray-500 text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/ifsc")}
              className="w-full h-[1.6rem] py-8 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src="https://i.ibb.co/t9SGKHn/img3.png" alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  IFSC Modification
                </span>
              </div>
              <div className="">
                <IoIosArrowForward className="text-gray-500 text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <Link to={"/login"}
              // onClick={() => navigate("/login")}
              // onClick={() => setOpen(true)}
              className="w-full h-[1.6rem] py-8 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src="https://i.ibb.co/4wgdChRh/img4.png" alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Change ID Login Password
                </span>
              </div>

              <div className="">
                <IoIosArrowForward className="text-gray-500 text-sm sm:text-lg md:text-2xl" />
              </div>
            </Link>

            <li
              onClick={() => navigate("/changebank")}
              className="w-full h-[1.6rem] py-8 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src="https://i.ibb.co/Rkj6BBJX/img5.png" alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Change bank name
                </span>
              </div>
              <div className="">
                <IoIosArrowForward className="text-gray-500 text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/modifybank")}
              className="w-full h-[1.6rem] py-8 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src="https://i.ibb.co/Rkj6BBJX/img5.png" alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Modify Bank Information
                </span>
              </div>
              <div className="">
                <IoIosArrowForward className="text-gray-500 text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/address")}
              className="w-full h-[1.6rem] py-8 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src="https://i.ibb.co/bgw9Q9Hh/img7.png" alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Add USDT Address
                </span>
              </div>
              <div className="">
                <IoIosArrowForward className="text-gray-500 text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/activitybonus")}
              className="w-full h-[1.6rem] py-8 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src="https://i.ibb.co/0pgWtpY8/img8.png" alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Activity Bonus
                </span>
              </div>
              <div className="">
                <IoIosArrowForward className="text-gray-500 text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/gameproplems")}
              className="w-full h-[1.6rem] py-8 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
             <div className="flex items-center space-x-3">
  <div className="relative inline-block w-[40px] h-[40px]">
    <img
      src="https://i.ibb.co/MxFkZKRW/customer.png"
      alt=""
      className="w-full h-full block "
    />
  </div>
  <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
    Game Problems
  </span>
</div>


              <div className="">
                <IoIosArrowForward className="text-gray-500 text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>
          </ul>
        </div>

        <div className="p-2 sm:p-4">
          <div className=" max-w-full ">
            <h2 className="text-gray-800 font-semibold text-lg mb-2">Kind tips</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              1. Please select the relevant query and submit it for review. After
              successful submission, the customer service specialist will handle it
              for you immediately.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-2">
              2. After submitting for review, you can use{" "}
              <span className="font-medium">[Question in progress]</span> to view the
              review results of the work order you submitted.
            </p>
          </div>
        </div>

        <footer
          onClick={() => navigate("/progress")}
          className="flex w-full justify-center  py-4"
        >
          <button className="bg-[#FF6475] h-[40px] sm:h-[50px] w-[90%] sm:w-[80%] text-white text-lg sm:text-xl md:text-xl rounded-full font-medium">
            Progress Query
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Navbar;

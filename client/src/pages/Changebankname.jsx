import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeBankName } from "../utils/slice";

const bankData = [
  "Bank of Baroda",
  "Union Bank of India",
  "Central Bank of India",
  "Yes Bank",
  "HDFC Bank",
  "Karnataka Bank",
  "Standard Chartered Bank",
  "IDBI Bank",
  "Bank of India",
  "Punjab National Bank",
  "ICICI Bank",
  "Canara Bank",
  "Kotak Mahindra Bank",
  "State Bank of India",
  "Indian Bank",
  "Axis Bank",
  "FEDERAL BANK",
  "Syndicate Bank",
  "Citibank India",
  "Indian Overseas Bank",
  "IDFC Bank",
  "Bandhan Bank",
  "Indusind Bank",
  "Equitas Bank",
  "India Post Payments Bank",
  "Corporation Bank",
  "City Union Bank",
  "PYTM PAYMENTS BANK",
  "Karur Vysya Bank",
  "Tamilnad Mercantile Bank",
  "Allahabad Bank",
  "varachha co-operative bank",
  "Meghalaya Rural Bank",
  "AU Small Finance Bank",
  "Lakshmi Vilas Bank",
  "South Indian Bank",
  "Bassein Catholic Co-Operative Bank",
  "Airtel Payment Bank",
  "State Bank of Hyderabad",
  "GP Parsik Bank",
  "Kerala Gramin Bank",
  "RBL Bank",
  "Dhanlaxmi Bank",
  "TJSB Bank",
  "Purvanchal Bank",
  "Sarva Haryana Gramin Bank",
  "Ahmedabad District Co-Operative Bank",
  "Saraswat Cooperative Bank",
  "Telangana Grameena Bank",
  "Andhra Pragathi Grameena Bank",
  "Rajasthan Marudhara Gramin Bank",
  "Abhyudaya Bank",
  "Capital Small Finance Bank",
  "Mizoram Rural Bank",
  "Andhra Pradesh Grameena Vikas Bank",
  "Karnataka Vikas Grameena Bank",
  "The Ahmedabad Merchantile Co-Op Bank Ltd",
  "Madhya Bihar Gramin Bank",
  "NSDL Payments Bank",
  "ESAF Small Finance Bank",
  "Himachal Pradesh State Cooperative Bank",
  "Maharashtra State Cooperative Bank",
  "Oriental Bank of Commerce",
  "Nainital Bank",
  "Jharkhand Rajya Gramin Bank",
  "jio payments bank",
  "MAHARASHTRA GRAMIN BANK",
  "AIRTEL PAYMENTS BANK",
  "Uttarakhand Gramin Bank",
  "Equitas Small Finance Bank",
  "Himachal Pradesh Gramin Bank",
  "Krishna District Co-Operative Central Bank Ltd.",
  "RAJKOT NAGARIK SAHAKARI BANK LTD",
  "North East small financial bank",
  "Catholic syrian bank",
  "Fincare small finance bank",
  "Baroda Uttar Pradesh Gramin Bank",
  "Dhanalakshmi bank",
  "Cosmos Co-operative Bank Ltd",
  "Saurashtra gramin bank",
  "Baroda Rajasthan kshetriya gramin bank",
  "Suco Bank",
  "Jana small finance bank",
  "Dena Gujarat Gramin Bank",
  "Chaitanya Godavari Grameena Bank",
  "SVC BANK",
  "Bharat cooperative bank",
  "The Surat District Co-Op. Bank Ltd.",
  "USDT",
  "The Kalupur Commercial Co-operative Bank",
  "Prime co-operative Bank",
  "Tripura Gramin Bank",
  "Zila Sahakari Bank Ltd Bareilly",
  "ARYAVART Bank",
  "Development credit Bank",
  "Sarva UP Gramin Bank",
  "New India Co-Operative Bank",
  "NKGSB Co-operative Bank Ltd.",
  "Vijaya Bank",
  "United Bank of India",
  "State Bank of Bikaner And Jaipur",
  "Shri Janata Sahakari Bank LTD",
  "Rajgurunagar Sahakari Bank",
  "FEDERAL NEO BANK JUPITER",
  "CHHATTISGARH RAJYA GRAMIN BANK",
  "Apna Sahakari Bank",
  "GS Mahanagar Co-Op Bank Ltd",
  "Bangiya Gramin Vikash Bank",
  "Assam Gramin Vikash Bank",
  "Kangra Central Co-operative Bank Ltd",
  "Punjab Gramin Bank",
  "Assam gramin bikash bank",
  "Karnataka Gramin Bank",
  "SURYODAY SMALL FINANCE BANK LIMITED",
  "Utkarsh Small Finance Bank",
  "The Meghalaya Co-operative Apex Bank",
  "UTTAR BIHAR GRAMIN BANK",
  "STATE BANK OF TRAVANCORE",
  "SHIVALIK SMALL FIHANCE BANK",
  "DAKSHIN BIHIR GRAMIN BANK",
  "manipur rural bank",
  "State bank of patiala",
  "BARODA GUJARAT GRAMIN BANK",
  "The Gujarat State Co-operative Bank Limited",
  "vasai vikas sahakari",
  "paschim banga gramin bank",
  "VISHAPATNAM co-operative bank",
  "Samarth Sahakari Bank Ltd",
  "uttarbanga kshetriya gramin bank",
  "janata sahakari bank ltd",
  "the gayatri co-operative urban bank",
  "Jupiter Federal Bank",
  "ABHYUDAYA CO-OP. BANK LTD.",
  "J&K Grameen Bank",
  "Post Office Savings Bank",
  "SBM Bank India",
  "Bank of Maharashtra",
  "Jind Central Co-Op Bank",
  "PRATHAMA Up Gramin Bank",
  "State Bank of Mysore",
  "BARODA U.P BANK",
  "PURVANCHAL GRAMIN BANK",
  "The Varachha Co-operative Bank Ltd., Surat",
  "State Bank Of Mauritius Ltd",
  "Kallappanna Awade Janata Bank",
  "Jupiter Federal",
  "HIMACHAL PARDESH STATE COOPERATIVE BANK",
  "Pratham Bank",
  "Oisha Gramya Bank",
  "KDCC BANK",
  "The Hasti Coop Bank",
  "District Co-Operative Central Bank Ltd",
  "ODISHA GRAMYA BANK",
  "IDFC FIRST BANK LTD",
  "The Ahmedabad District Co-op Bank Ltd",
  "Tamil Nadu Grama Bank",
  "GAYATRI BANK",
  "GRAMIN BANK OF ARYAVART",
  "The Kalyan Janata Sahakari Bank Ltd",
  "Dombivli Nagari Sahakari Bank Ltd.",
  "UTKAL GRAMYA BANK",
  "Bihar Gramin Bank",
  "CATHOLIC SYRIAN BANK LTD",
  "Jalna Merchants Co-operative Bank",
  "THE RATNAKAR BANK LTD",
  "Zila sahkari bank",
  "NAGAR SAHKARI BANK LTD. MAHARAJGANJ",
  "Vananchal Gramin Bank",
  "Jammu Kashmir Bank",
  "Punjab Sind Bank",
  "Punjab dan Sind Bank",
  "Jammu and Kashmir Bank",
  "HARYANA BANK",
  "JILA SAHAKARI BANK",
  "BANASKANTHA DISTRICT CENTRAL CO-OP. BANK LTD",
  "The Rohtak Central Co-op. Bank Ltd",
  "ASSOCIATE CO-OP. BANK LTD",
  "suryoday small finance Bank",
  "Andhra Pragati grameena bank",
  "Federal Savings Bank",
  "the banaskantha mercantile bank",
  "SBI - KIOSK BANKING",
];

const Changebankname = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [bank, setBank] = useState("Please Select a bank");
  const [isDisabled, setIsDisabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpne] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupStatus, setPopupStatus] = useState("");
  const token = localStorage.getItem("auth");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShowPopup(true);
    // alert("Form submitted with data: " + JSON.stringify(data));
    console.log(data);

    const formData = new FormData();
    formData.append("BankNumber", data.BankNumber);
    formData.append("BankName", bank);
    formData.append("auth", token);

    dispatch(changeBankName(formData)).then((res) => {
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

  const handleTogle = () => {
    setOpne(!open);
  };

  const handleBanks = (item) => {
    setBank(item);

    handleTogle();
  };

  // Filter bank names based on search term
  const filteredBanks = bankData.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="w-full max-w-[600px] min-h-screen mx-auto bg-slate-50  relative">
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
              Change bank name
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
              <label className="block text-sm sm:text-lg lg:text-xl text-left  text-gray-800 mb-2">
                Bank number <span className="text-red-500">*</span>
              </label>
              <div className="bg-white rounded-md p-3 sm:p-4 shadow-md">
                <input
                  {...register("BankNumber", {
                    required: "Please enter Bank Card Number",
                  })}
                  type="text"
                  placeholder="Please enter Bank Card Number"
                  name="BankNumber"
                  className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                    errors.BankNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {/* Error Message */}
              {errors.BankNumber && (
                <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                  {errors.BankNumber.message}
                </div>
              )}
            </div>

            {/* IFSC Code Input */}
            <div className="mt-7">
              <div className="flex ">
                {/* <span><BsBank className='color-blue text-lg mr-1' /></span> */}
                <p className="text-sm gray-50">Bank name</p>
              </div>
              <input
                type="text"
                className="w-full mt-2 bg-nav gray-100 border white-color border-slate-300 rounded-md p-2 focus:border-slate-700 ps-6 flex items-center focus:border focus:outline-none cursor-pointer   placeholder:text-sm placeholder:text-slate-500"
                placeholder="Please enter the bank name"
                name="BankName"
                readOnly
                value={bank}

                onClick={handleTogle}
              />

              {open && (
                <div className="bank-option bg-nav p-4">
                  <input
                    type="text"
                    className="w-full mt-2 bg-nav border gray-100 border-slate-300 rounded-md p-2 focus:border-slate-700 ps-6 flex items-center focus:border focus:outline-none placeholder:text-sm placeholder:text-slate-500"
                    placeholder="Search bank name"
                    name="name_bank"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                  {filteredBanks.map((item) => (
                    <p
                      key={item}
                      className="gray-100 text-sm p-2 border-b border-zinc-700"
                      onClick={() => handleBanks(item)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
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

export default Changebankname;

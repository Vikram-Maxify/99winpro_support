import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Rechargepage from "./pages/Rechargepage";
import Depositepage from "./pages/Depositepage";
import Withdrawalpage from "./pages/Withdrawalpage";
import Ifscpage from "./pages/Ifscpage";
import Loginpasswordself from "./pages/Loginpasswordself";
import ChangeIdpage from "./pages/ChangeIdpage";
import Changebankname from "./pages/Changebankname";
import Modifybankinfo from "./pages/Modifybankinfo";
import AddusdtAddress from "./pages/AddusdtAddress";
import ActivityBonus from "./pages/ActivityBonus";
import Gameproplems from "./pages/Gameproplems";
import Popup from "./pages/Popup";
import Progressquery from "./pages/Progressquery";
import WithdrawalProblem from "./pages/WithdrawlProblem";

import Cookies from "js-cookie"
import { useEffect } from "react";


function App() {
  console.log("app");
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token'); // Extract 'token' from the URL
 

  useEffect(()=>{
   if(token !== null)
   {
       localStorage.setItem("auth",token) 
   }

  },[])

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/recharge" element={<Rechargepage />} />
        <Route path="/deposite" element={<Depositepage />} />
        <Route path="/withdrawal" element={<WithdrawalProblem/>} />
        <Route path="/ifsc" element={<Ifscpage />} />
        <Route path="/login" element={<Loginpasswordself />} />
        <Route path="/changeid" element={<ChangeIdpage />} />
        <Route path="/changebank" element={<Changebankname />} />
        <Route path="/modifybank" element={<Modifybankinfo />} />
        <Route path="/address" element={<AddusdtAddress />} />
        <Route path="/activitybonus" element={<ActivityBonus />} />
        <Route path="/gameproplems" element={<Gameproplems />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/progress" element={<Progressquery />} />
        <Route  path ="/withdrawlproblem" element={<Withdrawalpage/>}/>
      </Routes>
    </>
  );
}

export default App;

import React from 'react';
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientLogin from "./Pages/Login";
import ClientSignup from "./Pages/Signup";
import Home from './Pages/Home';
// import Employer from "../Employer/index";

const CIndex = () => {
    return (
        <div>


            <Navbar />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="clientlogin" element={<ClientLogin />} />
                <Route path="clientsignup" element={<ClientSignup />} />
                {/* <Route path="employer" element={<Employer />} /> */}
            </Routes>


        </div>
    );
}

export default CIndex;

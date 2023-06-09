import React, { useState } from 'react';
import Navbar from "./Component/Navbar";
import { Routes, Route } from 'react-router-dom';
// import ClientLogin from "./Pages/Login";
// import ClientSignup from "./Pages/Signup";
import Home from './Pages/Home';
// import Employer from "../Employer";
import 'font-awesome/css/font-awesome.min.css';
import LoginModal from './Component/Modal/LoginModal';
import SignupModal from './Component/Modal/SignupModal';

const CIndex = () => {

    const [search_term, setSearchTerm] = useState("");



    return (
        <div >


            <Navbar search_term={search_term} setSearchTerm={setSearchTerm} />
            <LoginModal />
            <SignupModal />
            {/* <ClientLogin /> */}
            {/* <ClientSignup /> */}
            <Routes>
                <Route path="" element={<Home search_term={search_term} />} />
                {/* <Route path="clientlogin" element={<ClientLogin />} /> */}
                {/* <Route path="clientsignup" element={<ClientSignup />} /> */}
                {/* <Route path="employer" element={<Employer />} /> */}
            </Routes>


        </div>
    );
}

export default CIndex;

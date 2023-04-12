import React from 'react';
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ClientLogin from "./Pages/Login";
// import ClientSignup from "./Pages/Signup";
import LoginModal from './Component/Modal/LoginModal';
import SignupModal from './Component/Modal/SignupModal';

const EIndex = () => {
    return (
        <div>

            <Navbar />
            <LoginModal />
            <SignupModal />
            <Routes>
                {/* <Route path="clientlogin" element={<ClientLogin />} />
                <Route path="clientsignup" element={<ClientSignup />} /> */}

            </Routes>

        </div>
    );
}

export default EIndex;

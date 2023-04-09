import React from 'react';
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientLogin from "./Pages/Login";
import ClientSignup from "./Pages/Signup";

const EIndex = () => {
    return (
        <div>

            <Navbar />
            <Routes>
                <Route path="clientlogin" element={<ClientLogin />} />
                <Route path="clientsignup" element={<ClientSignup />} />

            </Routes>

        </div>
    );
}

export default EIndex;

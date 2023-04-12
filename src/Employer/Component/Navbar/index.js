

import React from 'react';
import '../../../public/CSS/navbar.css';
import { Link } from 'react-router-dom';
// import Modal from '../Modal/LoginModal'
// import Login from '../../Pages/Login';
// import Signup from '../../Pages/Signup';





const Navbar = () => {
    return (



        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid">


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="">Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Jobs Catagories
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Frontend</Link></li>
                                <li><Link className="dropdown-item" to="#">Backend</Link></li>

                                <li><Link className="dropdown-item" to="#">FullStack</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="employer">Employer</Link>
                        </li>

                    </ul>
                    <div className="col-md-4 search">
                        <form className="d-flex search-bar" role="search">
                            <input className="input search-input  " type="search" placeholder="Search" aria-label="Search" />
                            <button className=" searchbtn " type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <ul className="navbar-nav ">


                        {/* <li className="nav-item nav-link">
                            <Link className="nav-link text-white" to="clientlogin">

                            <button className="text-white btn btn-danger  " type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Login<i className="fa fa-sign-in p-1" aria-hidden="true"></i></button>
                            </Link>
                        </li> */}

                        <li className="nav-item nav-link">
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#EmployerLoginModal">
                                Login
                                <i className="fa fa-sign-in p-1" aria-hidden="true"></i></button>
                        </li>
                        <li className="nav-item nav-link">
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#EmployerSignupModal">
                                Register
                                <i className="fa fa-sign-in p-1" aria-hidden="true"></i></button>
                        </li>


                        {/* <li className="nav-item nav-link">
                            <Link className="nav-link text-white" to="clientsignup">

                            <button className=" btn btn-danger  " type="button" data-bs-toggle="modal" data-bs-target="#ClientSignupModal">Register<i className="fa fa-sign-in p-1" aria-hidden="true"></i></button>
                            </Link>
                        </li> */}







                    </ul>
                </div>
            </div>
        </nav >



    );
};

export default Navbar;

import axios from 'axios';
import React from 'react';

const SignupModal = () => {
    function handleSubmit(e) {
        e.preventDefault();

        let { name, email, mobile, password } = e.target;
        axios.post(` ${process.env.REACT_APP_SERVER_DOMAIN}client/signup`, {
            name: name.value,
            email: email.value,
            mobile: mobile.value,
            password: password.value
        })
            .then(res => {

            })
            .catch(err => {

            })
    }

    return (
        <div >




            <div className="modal fade" id="ClientSignupModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Register</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="clientName" className="col-form-label">Name:</label>
                                    <input type="text" className="form-control" name="name" placeholder='Name' />
                                </div>
                                <div className="mb-3">
                                    <label for="clientEmail" className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" name="email" placeholder='example@examle.com' />
                                </div>
                                <div className="mb-3">
                                    <label for="clientMobile" className="col-form-label">Mobile:</label>
                                    <input type="number" className="form-control" name="mobile" placeholder='9800000000' />
                                </div>
                                <div className="mb-3">
                                    <label for="clientPassword" className="col-form-label">Password:</label>
                                    <input type="password" name="password" className="form-control" placeholder='********' />
                                </div>
                                {/* <div className="mb-3">
                                    <label for="clientPassword" className="col-form-label">Confirm Password:</label>
                                    <input type="password" name="clientPassword" className="form-control" placeholder='********' />
                                </div> */}
                                <div className="modal-footer">

                                    <button type="submit" className="btn btn-success">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default SignupModal;

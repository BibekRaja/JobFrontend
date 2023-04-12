import React from 'react';

const SignupModal = () => {
    return (
        <div >




            <div class="modal fade" id="EmployerSignupModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Register</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="employerName" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="employerName" name="employerName" placeholder='Name' />
                                </div>
                                <div class="mb-3">
                                    <label for="employerEmail" class="col-form-label">Email:</label>
                                    <input type="email" class="form-control" id="employerEmail" name="employerEmail" placeholder='example@examle.com' />
                                </div>
                                <div class="mb-3">
                                    <label for="employerWebsite" class="col-form-label">Website:</label>
                                    <input type="url" class="form-control" id="employerWebsite" name="employerWebsite" placeholder='www.example.com' />
                                </div>
                                <div class="mb-3">
                                    <label for="employerMobile" class="col-form-label">Mobile:</label>
                                    <input type="tel" class="form-control" id="employerMobile" name="employerMobile" placeholder='9800000000' />
                                </div>
                                <div class="mb-3">
                                    <label for="employerCompany" class="col-form-label">Company:</label>
                                    <input type="text" class="form-control" id="employerCompany" name="employerCompany" placeholder='Company' />
                                </div>
                                <div class="mb-3">
                                    <label for="employerPassword" class="col-form-label">Password:</label>
                                    <input type="password" name="employerPassword" className="form-control" id="employerPassword" placeholder='********' />
                                </div>
                                <div class="mb-3">
                                    <label for="employerPassword" class="col-form-label">Confirm Password:</label>
                                    <input type="password" name="employerPassword" className="form-control" id="employerPassword" placeholder='********' />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Register</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default SignupModal;

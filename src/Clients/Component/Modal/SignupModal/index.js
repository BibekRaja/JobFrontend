import React from 'react';

const SignupModal = () => {
    return (
        <div >




            <div class="modal fade" id="ClientSignupModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Register</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="clientName" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="clientName" name="clientName" placeholder='Name' />
                                </div>
                                <div class="mb-3">
                                    <label for="clientEmail" class="col-form-label">Email:</label>
                                    <input type="email" class="form-control" id="clientEmail" name="clientEmail" placeholder='example@examle.com' />
                                </div>
                                <div class="mb-3">
                                    <label for="clientMobile" class="col-form-label">Mobile:</label>
                                    <input type="number" class="form-control" id="clientMobile" name="clientMobile" placeholder='9800000000' />
                                </div>
                                <div class="mb-3">
                                    <label for="clientPassword" class="col-form-label">Password:</label>
                                    <input type="password" name="clientPassword" className="form-control" id="clientPassword" placeholder='********' />
                                </div>
                                <div class="mb-3">
                                    <label for="clientPassword" class="col-form-label">Confirm Password:</label>
                                    <input type="password" name="clientPassword" className="form-control" id="clientPassword" placeholder='********' />
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

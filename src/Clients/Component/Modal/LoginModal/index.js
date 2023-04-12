import React from 'react';

const LoginModal = () => {
    return (
        <div >




            <div class="modal fade" id="ClientLoginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Login</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="clientEmail" class="col-form-label">Email:</label>
                                    <input type="email" class="form-control" id="clientEmail" name="clientEmail" placeholder='exampl@examle.com' />
                                </div>
                                <div class="mb-3">
                                    <label for="clientPassword" class="col-form-label">Password:</label>
                                    <input type="password" name="clientPassword" className="form-control" id="clientPassword" placeholder='********' />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Login</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default LoginModal;

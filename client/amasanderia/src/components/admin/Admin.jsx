import React from 'react'
import SignIn from './login/SignIn'
import SignUp from './login/SignUp'

const Admin = () => {

    return (
        <div className="container-fluid bg-cafe">
            <div className="row d-flex align-items-center">
                <div className="col-lg-4 bg-white rounded">
                    <div className="d-flex justify-content-center">
                        <ul className="nav" id="myTab" role="tablist">
                            <li className="nav-item active" role="presentation">
                                <a className="nav-link active text-dark font-weight-bold text-2xl border-bottom" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="ofertas" aria-selected="true">Sign in</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link text-dark font-weight-bold text-2xl" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="ofertas" aria-selected="true">Sign up</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                <SignIn />
                            </div>
                            <div class="tab-pane fade show" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                                <SignUp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;

import React from 'react'
import Signin from './Signin'
import Signup from './Signup'

const Login = () => {



    return (
        <div className="container-fluid bg-cafec">
            <div className="container py-5">
                <div className="row d-flex justify-content-center bg-white rounded shadow">
                    <div className="col-lg-4">
                        <div className="row">
                            <ul className="nav" id="myTab" role="tablist">
                                <li className="nav-item active" role="presentation">
                                    <a className="nav-link active text-dark font-weight-bold text-3xl border-bottom" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="ofertas" aria-selected="true">Sign in</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="ofertas" aria-selected="true">Sign up</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                    <Signin />
                                </div>
                                <div class="tab-pane fade show" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                                    <Signup />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img src="/img/login.png" alt="" className="w-100 h-100" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

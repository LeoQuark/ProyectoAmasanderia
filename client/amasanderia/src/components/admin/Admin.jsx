import React from 'react'
// import Signin from './Signin'
// import Signup from './Signup'

const Signin = () => {

    return (
        <div className="container-fluid">
            <form action="">
                <div className="form-group">
                    <div className="row my-2">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="row my-2">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" name="password" placeholder="Contraseña" />
                    </div>
                    <div className="d-flex justify-content-center pt-4 my-2">
                        <button className="btn btn-success" type="submit">Iniciar sesión</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const Signup = () => {

    return (
        <div className="container-fluid">
            <form action="">
                <div className="form-group">
                    <div className="row my-2">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" name="nombre" placeholder="Nombre completo" />
                    </div>
                    <div className="row my-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="row my-2">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" name="password" placeholder="Contraseña" />
                    </div>
                    <div className="row my-2">
                        <label htmlFor="passwordConfirm">Confirmar contraseña</label>
                        <input type="password" className="form-control" name="passwordConfirm" placeholder="Contraseña" />
                    </div>
                    <div className="d-flex justify-content-center pt-4 my-2">
                        <button className="btn btn-success" type="submit">Crear cuenta</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


const Login = () => {

    return (
        <div className="container-fluid bg-cafec">
            <div className="container py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 bg-white rounded shadow">
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
                                    <Signin />
                                </div>
                                <div class="tab-pane fade show" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                                    <Signup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

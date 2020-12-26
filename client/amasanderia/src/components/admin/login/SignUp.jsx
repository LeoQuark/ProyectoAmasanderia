import React from 'react'

const SignUp = () => {

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

export default SignUp;
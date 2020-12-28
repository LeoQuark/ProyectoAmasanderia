import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const SignUp = () => {

    const history = useHistory();
    const [cargando, setCatgando] = useState()
    const [datosUsuario, setDatosUsuario] = useState({
        nombre: "leo"
    })
    const [loggedIn, setLoggedIn] = useState(false)
    // const [datos, setDatos] = useState()

    const handleInputChange = (event) => {
        setDatosUsuario({
            ...datosUsuario,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = async (event) => {
        event.preventDefault()
        // event.target.reset()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosUsuario)
        };
        const res = await fetch(`http://localhost:4000/api/admin/create`, requestOptions)
        const datos = await res.json()
        console.log(datosUsuario)
        if (datos.status) {
            history.push(`/admin/${datosUsuario.nombre}`)
        }
    }

    return (
        <div className="container-fluid">
            <div className="row py-4">
                <div className="d-flex justify-content-center py-4">
                    <img src="/img/logo-cafe.png" className="img-fluid w-75 h-100" alt="" />
                </div>
            </div>
            <form action="" onSubmit={enviarDatos}>
                <div className="form-group mx-4 mx-sm-2">
                    <div className="row my-2">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control form-control-sm" name="nombre" placeholder="Nombre completo"
                            onChange={handleInputChange} />
                    </div>
                    <div className="row my-2">
                        <label htmlFor="correo">Email</label>
                        <input type="email" className="form-control form-control-sm" name="correo" placeholder="example@gmail.com"
                            onChange={handleInputChange} />
                    </div>
                    <div className="row my-2">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control form-control-sm" name="password" placeholder="Contraseña"
                            onChange={handleInputChange} />
                    </div>
                    {/* <div className="row my-2">
                        <label htmlFor="passwordConfirm">Confirmar contraseña</label>
                        <input type="password" className="form-control form-control-sm" name="passwordConfirm" placeholder="Contraseña" />
                    </div> */}
                    <div className="d-flex justify-content-center pt-4 my-2">
                        <button className="btn btn-success" type="submit">Crear cuenta</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {

    const [cantidad, setCantidad] = useState(0)

    useEffect(() => {
        let datos = localStorage.getItem("productos")
        if (datos != null) {
            setCantidad(2)
        } else {
            setCantidad(0)
        }
    }, [])

    return (
        <div className="container-fluid fixed-top bg-white border-bottom">
            <nav className="navbar navbar-expand-lg my-0 py-0">
                <div className="container">
                    <div className="row pl-2">
                        <Link to="/" className="d-inline-flex">
                            <img src="/img/logo-cafe.png" className="img-logo" alt="" />
                        </Link>
                    </div>
                    <button className="navbar-toggler rounded shadow-sm" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Menu">
                        <span className=""><i className="fas fa-bars fa-2x"></i></span>
                    </button>
                    <div className="navbar-collapse justify-content-end collapse" id="navbar">
                        <div className="row d-flex">
                            <ul className="navbar-nav mt-3">
                                <li className="nav-item">
                                    <Link className="nav-link mx-2">
                                        <p className="font-roboto rounded px-1 py-1 b-hover">Administrador</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link mx-2">
                                        <p className="font-roboto rounded px-1 py-1 b-hover">Inicio</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default HeaderAdmin;

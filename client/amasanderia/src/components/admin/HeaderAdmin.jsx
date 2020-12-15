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
        <div className="conatainer-fluid fixed-top ">
            {/* <div className="container-fluid bg-orange-800 pt-1">
        <div className="row d-flex justify-content-end">
          <div className="col-auto ">
            <Link>
              <div className="bg-black text-white px-2 rounded-md py-1">Iniciar Sesión <span><i class="fas fa-sign-in-alt fa-md"></i></span></div>
            </Link>
          </div>
        </div>
      </div> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-cafec ">
                <div className="container">
                    <div className="row pl-2">
                        <Link to="/" className="d-inline-flex">
                            <img src="/img/logo.png" className="img-logo" alt="" />
                            {/* <a className="navbar-brand text-decoration-none text-capitalize mx-2 pl-3">
                <p className="text-yellow-300 text-2xl xl:text-3xl font-sansita">Amasanderia</p>
              </a> */}
                        </Link>
                    </div>
                    <button className="navbar-toggler rounded shadow-lg" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Menu">
                        <span className=""><i className="fas fa-bars fa-2x"></i></span>
                    </button>
                    <div className="navbar-collapse justify-content-end collapse" id="navbar">
                        <div className="row d-flex">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/panel-administrador" className="nav-link text-white mx-2">
                                        <p className="rounded px-1 py-1">Panel de Administrador</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link mx-2">
                                        <p className="rounded px-1 py-1">Home</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/productos" className="nav-link text-warning font-weight-bold mx-2">
                                        <p className="rounded px-1 py-1">Productos</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contacto" className="nav-link text-white mx-2">
                                        <p className="rounded px-1 py-1">Contacto</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/conocenos" className="nav-link text-yellow mx-2">
                                        <p className="rounded px-1 py-1">Conócenos</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/carrito" className="nav-link text-yellow mx-2">
                                        <div className="d-flex">
                                            <i className="fas fa-shopping-bag fa-2x"></i>
                                            <span className="badge badge-danger text-white py-auto mb-4">{cantidad}</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderAdmin;
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <>
            <div className="container-fluid bg-cafe">
                <div className="row py-4">
                    <div className="col-6 col-md-3">
                        <Link to="/" className="text-decoration-none">
                            <img src="/img/logo.png" alt="" className="w-100 h-100" />
                        </Link>
                    </div>
                    <div className="col-6 col-md-3">
                        <ul className="list-group list-style-none">
                            <li><h5 className="font-weight-bold text-white">Conócenos</h5></li>
                            <li><Link to="/conocenos" className="text-white">Conoce nuestra historia</Link></li>
                            <li><Link to="/contacto" className="text-white">Contáctanos</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <ul className="list-group list-style-none">
                            <li><h5 className="font-weight-bold text-white">Secciones</h5></li>
                            <li><Link to="/" className="text-white">Inicio</Link></li>
                            <li><Link to="/productos" className="text-white">Productos</Link></li>
                            <li><Link to="/carrito" className="text-white">Carrito de compras</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <h5 className="font-weight-bold text-white">Redes sociales</h5>
                        <ul className="list-group list-group-horizontal list-style-none pt-2">
                            <li>
                                <a href="#">
                                    <i class="fab fa-facebook-f fa-2x text-white mx-2"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fab fa-instagram fa-2x text-white mx-2"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fab fa-twitter fa-2x text-white mx-2"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
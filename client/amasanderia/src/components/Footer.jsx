import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div className="container-fluid bg-cafec text-amarillo">
            <footer className="container px-1">
                <div className="row d-flex  justify-content-center">
                    <div className="col-12 col-sm-6 col-lg-6 my-2">
                        <div className="">
                            <p className="text-center py-3">Conócenos</p>
                            <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur esse cupiditate debitis sed, dignissimos ad beatae. A, quisquam ex.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-6 my-2">
                        <div className="">
                            <p className="text-center py-3">Nuestros Productos</p>
                            <ul className="text-center py-3">
                                {/* poner los link aqui */}
                                <li>Amasandería</li>
                                <li>Pasteles</li>
                                <li>Empanadas</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center my-2">
                    <ul className="d-inline-flex list-style-none">
                        <li><i class="fab fa-facebook fa-2x mx-2 hover-scale-md"></i></li>
                        <li><i class="fab fa-instagram fa-2x mx-2 hover-scale-md"></i></li>
                        <li><i class="fab fa-twitter fa-2x mx-2 hover-scale-md"></i></li>
                    </ul>
                </div>
                <div className="row d-flex justify-content-center py-2">
                    <p className="">Copyright <i class="far fa-copyright"></i> 2020 - Dark Cuásar UTEM</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div className="container-fluid bg-orange-900 mt-4">
            <footer className="container mx-2">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-sm-6 col-lg-6 my-2">
                        <div className="divide-y-2 divide-yellow-600 divide-opacity-50">
                            <p className="text-2xl md:text-2xl xl:text-3xl font-sansita text-yellow-300 text-center py-3">Conócenos</p>
                            <p className="text-yellow-300 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur esse cupiditate debitis sed, dignissimos ad beatae. A, quisquam ex.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 my-2">
                        <div className="divide-y-2 divide-yellow-600 divide-opacity-50">
                            <p className="text-2xl md:text-2xl xl:text-3xl font-sansita text-yellow-300 text-center py-3">Nuestros Productos</p>
                            <ul className="text-center text-yellow-300 py-3">
                                {/* poner los link aqui */}
                                <li>Amasandería</li>
                                <li>Pasteles</li>
                                <li>Empanadas</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center my-2">
                    <ul className="d-inline-flex text-yellow-300">
                        <li><i class="fab fa-facebook fa-2x mx-2 hover-scale-md"></i></li>
                        <li><i class="fab fa-instagram fa-2x mx-2 hover-scale-md"></i></li>
                        <li><i class="fab fa-twitter fa-2x mx-2 hover-scale-md"></i></li>
                    </ul>
                </div>
                <div className="row d-flex justify-content-center py-2">
                    <p className="text-orange-500">Copyright <i class="far fa-copyright"></i> 2020 - Dark Cuásar UTEM</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
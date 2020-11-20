import React from 'react'
import { Link } from 'react-router-dom'

const ContactoForm = () => {
    // codigo para enviar el email 
    return (
        <div className="container bg-white rounded shadow py-3">
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <h2 className="text-center text-4xl font-weight-bold py-4">Contáctanos</h2>
                    <hr />
                </div>
            </div>
            <div className="row d-flex justify-content-center pt-4 pt-sm-5 px-4 px-md-1">
                <div className="col-12 col-md-5 px-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti modi cupiditate sed placeat, voluptatibus harum obcaecati inventore hic aspernatur explicabo mollitia, amet, maxime velit impedit non commodi natus iure magni cumque.</p>
                    <div className="d-flex justify-content-center py-5 opacity-animation">
                        <ul className="d-inline-flex">
                            <li>
                                <a href="#">
                                    <i class="fab fa-facebook-f fa-3x text-blue-600 mx-4 hover-scale-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-instagram fa-3x text-pink-600 mx-4 hover-scale-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-twitter fa-3x text-blue-400 mx-4 hover-scale-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <form action="" className="py-2 mx-2 pl-md-5">
                        <div className="row my-1">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" className="form-control" name="nombre" placeholder="Ingrese su nombre" />
                        </div>
                        <div className="row my-1">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Ingrese su correo electrónico" />
                            <p className="text-gray-600 text-xs sm:text-sm">* Tu email está seguro con nosotros <span><i class="far fa-smile-wink"></i></span></p>
                        </div>
                        <div className="row my-1">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea type="text" className="form-control" name="mensaje" placeholder="Consulta, comentario o sugerencia" rows="3" />
                        </div>
                        <div className="row d-flex justify-content-center pt-3">
                            <button className="btn btn-success w-25">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactoForm;

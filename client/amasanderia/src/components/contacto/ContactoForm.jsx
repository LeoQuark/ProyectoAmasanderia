import React from 'react'

const ContactoForm = () => {

    return (
        <div className="my-2 py-3 border-b-2 border-l-2 border-r-2 border-green-300 shadow-md">
            <div className="row d-flex justify-content-center mx-2 mx-sm-5 divide-y divide-green-400 sm:divide-y-0 ">
                <div className="col-12 col-sm-6 my-3 my-sm-0 pt-3 sm:pt-5 slider-lr">
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat quis recusandae ex quam obcaecati quae eligendi maxime possimus! Suscipit!</p>
                    <br />
                    <p className="text-justify">Siguenos en nuestras redes sociales.</p>
                    <div className="d-flex justify-content-center pt-5 opacity-animation">
                        <ul className="d-inline-flex text-green-500">
                            <li><i class="fab fa-facebook fa-3x mx-3 hover-scale-lg"></i></li>
                            <li><i class="fab fa-instagram fa-3x mx-3 hover-scale-lg"></i></li>
                            <li><i class="fab fa-twitter fa-3x mx-3 hover-scale-lg"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-6 my-3 pt-3 pt-sm-0 my-sm-0 slider-rl">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" className="form-control form-control-sm focus:bg-green-100" placeholder="Ingresa tu nombre" name="nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control form-control-sm focus:bg-green-100" placeholder="example@gmail.com" name="nombre" />
                            <p className="text-gray-600 text-xs sm:text-sm">* Tu email está seguro con nosotros <span><i class="far fa-smile-wink"></i></span></p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" className="form-control form-control-sm focus:bg-green-100" placeholder="+569 1234 5678" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea type="text" className="form-control form-control-sm focus:bg-green-100" placeholder="Escribe tu mensaje" col="3" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn bg-green-500 hover:bg-green-600 hover:shadow-md">
                                <p className="text-white">Enviar</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactoForm;
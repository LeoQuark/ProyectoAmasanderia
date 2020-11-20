import React from 'react'

const ContactoTexto = () => {

    return (
        <div className="container py-5">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-5 border-r-2 border-yellow-400">
                    <h1 className="text-2xl text-yellow-400 text-capitalize font-weight-bold ml-md-5 pb-5">Lorem ipsum dolor sit.</h1>
                    <p className="ml-md-5 text-yellow-400 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis error molestias perspiciatis odit deserunt! Dolore, architecto laborum! Minus, beatae. Architecto!</p>
                </div>
                <div className="col-12 col-md-5">
                    <ul className="py-4 text-yellow-400 text-lg">
                        <li className="py-2"><span className="font-weight-bold mr-4">Dirección:</span> Lorem, ipsum dolor.</li>
                        <li className="py-2"><span className="font-weight-bold mr-4">Teléfono:</span>+569 88786545</li>
                        <li className="text">
                            <p className="font-weight-bold mb-2">Horarios:</p>
                            <p>Lunes a Viernes de 8:30 a 20:00 hrs.</p>
                            <p>Sabados y Domingos de 8:30 a 17:30 hrs.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactoTexto;
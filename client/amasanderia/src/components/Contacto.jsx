import React from 'react'
import ContactoForm from './contacto/ContactoForm'
import ContactoTexto from './contacto/ContactoTexto'

const Contacto = () => {

    return (
        <div className="container-fluid bg-cafeo mt-5 py-5">
            <div className="row d-flex justify-content-center my-2 pt-1">
                <div className="mx-2">
                    <img src="/img/foto-contacto.jpg" className="rounded-lg img-contacto" />
                </div>
            </div>
            <ContactoTexto />
            <ContactoForm />
        </div>
    );
}

export default Contacto;
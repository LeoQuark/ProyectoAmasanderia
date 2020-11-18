import React from 'react'
import ContactoForm from './contacto/ContactoForm'

const Contacto = () => {

    return (
        <div className="container-fluid mt-5 pt-5">
            <div className="row d-flex justify-content-center bg-cafeo">
                <p className="text-5xl md:text-6xl font-sansita">¡Contáctanos!</p>
            </div>
            <div className="container-fluid">
                <ContactoForm />
            </div>
        </div>
    );
}

export default Contacto;
import React from 'react'

const Cargando = () => {

    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-green-500" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Cargando;
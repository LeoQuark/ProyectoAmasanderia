import React from 'react'

const Cargando = () => {

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center pt-5">
                    <div className="col-10">
                        <div className="row d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading ...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cargando;
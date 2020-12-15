import React, { useEffect } from 'react';

const CarritoCard = (props) => {
    const producto = props.producto;



    return (
        <div>
            <div className="row bg-white rounded border border-light shadow-sm my-2">
                <div className="col-2 col-sm-2 col-md-1">
                    <div className="d-flex justify-content-center">
                        <a type="button" className={`btn btn-white `} >
                            <i className="fas fa-minus text-primary"></i>
                        </a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="font-weight-bold mx-3 pt-1">{producto.cantidad}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a type="button" className={`btn btn-white`} >
                            <i className="fas fa-plus text-primary"></i>
                        </a>
                    </div>
                </div>
                <div className="col-10 col-sm-5 col-md-3">
                    <img src="/img/empanadas.jpg" className="w-100 h-100 w- py-3 px-2 rounded img-card-carrito" alt="" />
                </div>
                <div className="col-8 col-sm-5 col-md-4">
                    <div className="py-0 py-sm-4">
                        <h5>{producto.nombre}</h5>
                        <p className="text-muted">{producto.descripcion}</p>
                    </div>
                </div>
                <div className="col-4 col-sm-10 col-md-3">
                    <div className="py-0 py-md-5">
                        <div className="d-flex">
                            <p className="font-weight-bold">Precio</p>
                            <p className="mx-2">{`$${producto.precio}`}</p>
                        </div>
                    </div>
                </div>
                <div className="col-2 col-sm-2 col-md-1">
                    <div className="d-fles justify-content-end">
                        <button className="btn rounded-circle btn-carrito">
                            <span><i class="fas fa-trash-alt "></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarritoCard;
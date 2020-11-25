import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Selected = (props) => {

    const producto = props.producto.data[0];
    const [cantidad, setCantidad] = useState(1)

    const btnRestar = () => {
        if (cantidad == 1 || cantidad < 1) {
            return "disabled"
        }
    }
    const btnSumar = () => {
        if (cantidad == 10 || cantidad > 10) {
            return "disabled"
        }
    }

    // console.log(producto)

    return (
        <div className="container-fluid">
            <div className="container pt-5">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb py-0 bg-white">
                            <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                            <li className="breadcrumb-item"><Link to="/productos">Productos</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{producto.nombre}</li>
                        </ol>
                    </nav>
                </div>
                <div className="row pt-2">
                    <div className="col-12 col-md-6 px-1">
                        <img src="/img/empanadas.jpg" className="card-img rounded" alt="" />
                    </div>
                    <div className="col-12 col-md-6 px-1 pl-sm-5">
                        <h2 className="font-weight-bold text-dark">{producto.nombre}</h2>
                        <p className="text-muted">{`id producto: ${producto.id}`}</p>
                        <hr className="pt-2" />
                        <h5 className="text-dark">{producto.descripcion}</h5>

                        <div className="row d-flex justify-content-center pt-5">
                            <div className="d-flex justify-content-start mx-2">
                                <a type="button" className={`btn btn-white ${btnRestar()}`} onClick={() => setCantidad(cantidad - 1)}>
                                    <i className="fas fa-minus text-primary"></i>
                                </a>
                                <p className="font-weight-bold mx-3 pt-1">{cantidad}</p>
                                <a type="button" className={`btn btn-white ${btnSumar()}`} onClick={() => setCantidad(cantidad + 1)}>
                                    <i className="fas fa-plus text-primary"></i>
                                </a>
                            </div>
                            <button type="button" className="btn btn-success w-50 mx-2">Agregar al carro</button>
                            <h5 className="font-weight-bold text-dark pt-2 px-2 mx-2">{`$ ${cantidad * producto.precio}`}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Selected;

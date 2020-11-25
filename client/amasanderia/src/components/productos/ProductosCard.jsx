import React from 'react'
import { Link } from 'react-router-dom'

const ProductosCard = (props) => {

    const productos = props.productos.data;

    return (
        <>
            {
                productos.map((producto, index) => (
                    <Link to={`/productos/${producto.id}`} className="text-decoration-none text-dark px-2" >
                        <div className="card bg-white rounded shadow-md px-1 hover-scale-sm my-2 h-card">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="pl-2 py-2">
                                        <h5 className="font-weight-bold py-1">{producto.nombre}</h5>
                                        <p className="pb-2 text-muted">{producto.descripcion}</p>
                                        <div className="d-flex">
                                            <p className="font-weight-bold">{`$ ${producto.precio}`}</p>
                                        </div>
                                        <div className="d-flex">
                                            <button className="btn btn-success mb-2 w-100">+ Agregar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 d-flex align-items-center ">
                                    <img src="/img/empanadas.jpg" className="card-img rounded" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>
    );
}

export default ProductosCard;


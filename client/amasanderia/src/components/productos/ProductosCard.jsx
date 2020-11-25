import React from 'react'
import { Link } from 'react-router-dom'

const ProductosCard = () => {

    return (
        <Link to={`/productos/id`} className="text-decoration-none text-dark">
            <div className="card bg-white rounded shadow-md px-2 hover-scale-sm my-2 ">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="pl-2 py-2">
                            <h3 className="font-weight-bold py-3">Titulo Lorem </h3>
                            <p className="pb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                            <hr />
                            <h3 className="font-weight-bold mb-4">$1.790</h3>
                            <button className="btn btn-success mb-2">+ Agregar al carro</button>
                            
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 d-flex align-items-center ">
                        <img src="/img/empanadas.jpg" className="card-img rounded" alt="" />

                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductosCard;


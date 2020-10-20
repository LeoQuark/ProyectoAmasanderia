import React from 'react'
import { Link } from 'react-router-dom'

const ProductosCard = () => {

    return (
        <Link to={`/productos/id`} className="text-decoration-none text-dark">
            <div className="card bg-white border-gray-100 rounded shadow-md px-2 hover-scale-sm my-2 h-card">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="pl-2 py-2">
                            <h3 className="text-lg font-weight-bold py-3">titulo Lorem </h3>
                            <p className="text-gray-600 pb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                            <p className="">$1.790</p>
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
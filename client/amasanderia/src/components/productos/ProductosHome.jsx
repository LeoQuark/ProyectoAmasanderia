import React from 'react'
import ProductosCard from './ProductosCard';

const ProductosHome = () => {

    return (
        <div className="container-fluid my-2 pt-3">
            <div className="row d-flex justify-content-start">
                <p className="font-weight-bold text-xl sm:text-2xl">Ofertas</p>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <ProductosCard />
            </div>
        </div>
    );
}

export default ProductosHome;
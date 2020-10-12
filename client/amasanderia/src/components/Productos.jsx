import React from 'react'
import ProductosHeader from './productos/ProductosHeader'

const Productos = () => {

    return (
        <div className="container-fluid mt-5 pt-5">
            <div className="row d-flex justify-content-center bg-gradient-to-r from-green-300 to-green-500">
                <p className="text-5xl md:text-6xl font-sansita">Productos</p>
            </div>
            <div className="container-fluid">
                <ProductosHeader />
            </div>
        </div>
    );
}

export default Productos;
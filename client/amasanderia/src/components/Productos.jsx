import React from 'react'
import ProductosHeader from './productos/ProductosHeader'

const Productos = () => {

    return (
        <div className="container-fluid mt-4 mb-0 pt-5 text-white ">
            <div className="row d-flex justify-content-center bg-cafeo">
                <p className="text-5xl text-yellow-300 md:text-6xl font-sansita ml-5 mr-5">Productos</p>
                
                <p className="text-5xl text-yellow-300 md:text-3xl font-sansita mx-5 mt-4">Una fina selección de nuestros mejores productos</p>
            </div>
            <div className="container-fluid">
                <ProductosHeader />
            </div>
        </div>
    );
}

export default Productos;
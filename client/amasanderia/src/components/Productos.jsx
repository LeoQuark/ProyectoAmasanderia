import React from 'react'
import ProductosHeader from './productos/ProductosHeader'

const Productos = () => {

    return (
        <div className="container-fluid mt-4 mb-0 pt-5 text-white ">
            <div className="row d-flex justify-content-center bg-cafeo">
                <p className="ml-5 mr-5">Productos</p>

                <p className="mx-5 mt-4">Una fina selección de nuestros mejores productos</p>
            </div>
            <div className="container-fluid">
                <ProductosHeader />
            </div>
        </div>
    );
}

export default Productos;
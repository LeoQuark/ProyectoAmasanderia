import React from 'react'
import ProductosHeader from './productos/ProductosHeader'

const Productos = (props) => {
    

    return (
        <div className="container-fluid  mt-5 text-white ">
            <hr />
            <hr />
            <div className="row d-flex justify-content-center bg-cafeo font-sansita text-amarillo">
                <h1 className="ml-5 mr-5 ">Productos</h1>
                <p className="mx-5 mt-4">Una fina selección de nuestros mejores productos</p>
            </div>
            <div className="container-fluid font-producton">
                <ProductosHeader />
            </div>
        </div>
    );
}

export default Productos;
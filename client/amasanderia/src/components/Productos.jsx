import React from 'react'
import ProductosHeader from './productos/ProductosHeader'

const Productos = (props) => {


    return (
        <div className="container-fluid  mt-5 text-white ">
            <hr />
            <hr />
            <div className="row d-flex justify-content-center bg-cafe">
                <h1 className="text-white font-sansita ml-5 mr-5">Productos</h1>
            </div>
            {/* <div className="container">
                <div className="d-flex justify-content-center bg-cafe">
                    <p className="text-white font-rochester text-2xl">Una fina selección de nuestros mejores productos</p>
                </div>
            </div> */}
            <div className="container-fluid font-producton">
                <ProductosHeader />
            </div>
        </div>
    );
}

export default Productos;
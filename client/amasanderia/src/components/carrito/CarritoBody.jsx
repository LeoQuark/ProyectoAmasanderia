import React, { useState } from 'react';
import CarritoCard from './CarritoCard'
import CarritoDatos from './CarritoDatos'

const CarritoBody = () => {

    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: 'Galleta',
            categoria: 'Almacen',
            descripcion: 'Galletas de chocolate 150 gr.',
            precio: 590,
            cantidad: 2,
            disponible: true,
            imagen: 'url.imagen'
        }
    ])

    const agregarProductos = (producto) => {
        if (!productos.find(p => p.nombre === producto.nombre || p.id === producto.id)) {
            setProductos(...productos, producto)
        }
    }

    const carritoRow = () => {
        return productos.map(producto => (
            <CarritoCard producto={producto} key={producto.nombre} />
        ))
    }

    return (
        <div className="container-fluid pt-5 my-5">
            <div className="container my-2">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="d-flex justify-content-start">
                            <h2 className="font-weight-bold">Bolsa de compra</h2>
                        </div>
                        <div className="col">
                            {carritoRow()}
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 bg-light">
                        <CarritoDatos />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarritoBody;
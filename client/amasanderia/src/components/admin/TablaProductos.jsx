import React, { useEffect, useState } from 'react'
import BotonEditar from './BotonEditar'
import BotonEliminar from './BotonEliminar'
import BotonInfo from './BotonInfo'


function TablaProductos(props) {

    const productos = props.productos.data;
    useEffect(() => {

    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-sm table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.categoria}</td>
                                <td>{producto.stock}</td>
                                <td>{`$ ${producto.precio}`}</td>
                                <td>
                                    <div className="d-flex">
                                        <BotonEditar producto={producto} />
                                        <BotonEliminar producto={producto} />
                                        <BotonInfo producto={producto} />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TablaProductos;
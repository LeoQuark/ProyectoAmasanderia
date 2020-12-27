import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Selected(props) {

    const [carrito, setCarrito] = useState([])
    const producto = props.producto.data[0]
    console.log(producto)

    const [cantidad, setCantidad] = useState(1)

    // console.log(JSON.stringify(producto))
    // console.log(producto)

    const btnRestar = () => {
        if (cantidad == 1 || cantidad < 1) {
            return "disabled"
        }
    }
    const btnSumar = () => {
        if (cantidad == 10 || cantidad > 10) {
            return "disabled"
        }
    }
    const precioTotal = (cantidad) => {
        if (cantidad == 1) {
            return producto.precio;
        } else if (cantidad > 1) {
            return cantidad * producto.precio;
        }
    }

    const handleAgregarProducto = e => {
        e.preventDefault();
        if (!carrito.find(t => t.nombre === producto.nombre)) {
            console.log(producto)
            setCarrito([...carrito, { producto }])
            console.log(carrito)
        }
        if (carrito.length === 0) {
            setCarrito([...carrito, { producto }])
            console.log(`null: ${carrito}`)
        } else {
            // setCarrito([...carrito,{producto}])

            console.log(carrito)
            // setCarrito([...carrito,producto])
            console.log("object")
        }
    }

    useEffect(() => {
        // console.log(carrito)

        // setCarrito([...carrito,producto])
        // console.log(carrito)
    }, [])


    return (
        <div className="container-fluid">
            <div className="container pt-5">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb py-0 bg-white">
                            <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                            <li className="breadcrumb-item"><Link to="/productos">Productos</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{producto.nombre}</li>
                        </ol>
                    </nav>
                </div>
                <div className="row pt-2">
                    <div className="col-12 col-md-6 px-1">
                        <img src="/img/empanadas.jpg" className="card-img rounded" alt="" />
                    </div>
                    <div className="col-12 col-md-6 px-1 pl-sm-5">
                        <h2 className="font-weight-bold text-dark">{producto.nombre}</h2>
                        <p className="text-muted">{`id producto: ${producto.id_producto}`}</p>
                        <hr className="pt-2" />
                        <h5 className="text-dark">{producto.descripcion}</h5>

                        <div className="row d-flex justify-content-center pt-5 mt-5">
                            <div className="d-flex justify-content-start mx-2">
                                <a type="button" className={`btn btn-white ${btnRestar()}`} onClick={() => setCantidad(cantidad - 1)}>
                                    <i className="fas fa-minus text-primary"></i>
                                </a>
                                <p className="font-weight-bold mx-3 pt-1">{cantidad}</p>
                                <a type="button" className={`btn btn-white ${btnSumar()}`} onClick={() => setCantidad(cantidad + 1)}>
                                    <i className="fas fa-plus text-primary"></i>
                                </a>
                            </div>
                            <button type="button" className="btn btn-success w-50 mx-2"
                                onClick={handleAgregarProducto}
                            >
                                Agregar al carro</button>
                            <h5 className="font-weight-bold text-dark pt-2 px-2 mx-2">{`$ ${precioTotal(cantidad, producto)}`}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Selected;

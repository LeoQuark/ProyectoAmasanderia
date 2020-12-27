import React, { useState, useEffect } from 'react';
import TablaProductos from './TablaProductos'
import Cargando from '../Cargando'

function PanelAdmin() {
    const [cargando, setCargando] = useState(<Cargando />)
    const [datosProductos, setDatosProductos] = useState({
        nombre: "leo"
    })
    const [respuesta, setRespuesta] = useState(false)
    const [file, setFile] = useState()


    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)

        setDatosProductos({
            ...datosProductos,
            [event.target.name]: event.target.value
        })
        // console.log(datosProductos)
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        event.target.reset()
        // setDatosProductos({ ...datosProductos, [file]: file })
        // console.log(file)
        // setDatosProductos({ ...datosProductos, file })
        // console.log(JSON.stringify(datosProductos + file))
        // datosProductos.append(file)
        // console.log(datosProductos)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosProductos)
        };
        fetch('http://localhost:4000/api/productos/create', requestOptions)
            .then(response => response.json({
                message: "añadido"
            }))
            .then(() => setRespuesta(!respuesta))
    }

    const getProductos = async () => {
        const res = await fetch(`http://localhost:4000/api/productos/get-all`)
        const datos = await res.json()
        setCargando(<TablaProductos productos={datos} />)
    }

    useEffect(() => {
        getProductos()
    }, [respuesta, getProductos])

    return (
        <div className="container-fluid my-5 pt-5">
            <div className="container shadow rounded">
                <div className="d-flex">
                    <h1 className="font-rochester my-2 mx-2 pl-4">Productos</h1>
                </div>
                <div className="col-12">
                    <div className="container px-1 py-1">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <form action="" method="POST" onSubmit={enviarDatos}>
                                    <div className="my-1">
                                        <label htmlFor="inputCategoria" className="form-label">Categoría</label>
                                        <select name="categoria" class="form-control form-control-sm" aria-label=".form-select-sm example" onChange={handleInputChange}>
                                            <option selected>Selecciona la categoría del producto</option>
                                            <option value="Oferta">Oferta</option>
                                            <option value="Amasanderia">Amasandería</option>
                                            <option value="Panaderia">Panadería</option>
                                            <option value="Empanadas">Empanadas</option>
                                            <option value="Pasteleria">Pastelería</option>
                                            <option value="Masas-Dulces">Masas Dulces</option>
                                            <option value="Almacen">Almacén</option>
                                        </select>
                                    </div>
                                    <div className="my-1">
                                        <label htmlFor="inputProducto" className="form-label">Producto</label>
                                        <input type="text" className="form-control form-control-sm" name="nombre" placeholder="Nombre del producto" onChange={handleInputChange} />
                                    </div>
                                    <div className="my-1">
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="inputPrecio" className="form-label">Precio</label>
                                                <input type="number" className="form-control form-control-sm" name="precio" placeholder="Precio del producto" onChange={handleInputChange} />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="inputStock" className="form-label">Stock</label>
                                                <input type="number" className="form-control form-control-sm" name="stock" placeholder="Stock" onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-1">
                                        <label htmlFor="inputDescripcion" className="form-label">Descripcion</label>
                                        <textarea name="descripcion" className="form-control form-control-sm" cols="30" rows="3" placeholder="Ingrese una descripcion del producto" onChange={handleInputChange} />
                                    </div>
                                    <div className="my-1">
                                        <label htmlFor="inputImagen" className="form-label">Imagen</label>
                                        <input type="file" name="imagen" className="form-control form-control-sm"
                                            onChange={event => {
                                                const file = event.target.files[0]
                                                setFile(file)
                                                // console.log(file)
                                                // handleInputChange()
                                            }}
                                        // onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="my-1 d-none">
                                        <input type="number" name="id_admin" className="form-control form-control-sm" placeholder="hola" value="1" onChange={handleInputChange} />
                                    </div>
                                    <div className="d-flex justify-content-center my-2 pt-2">
                                        <button type="submit" className="btn btn-success">Agregar</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-8">
                                {cargando}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PanelAdmin;
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'

function BotonEditar(props) {
    let producto = props.producto;

    const [show, setShow] = useState(false);
    const [seleccion, setSeleccion] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const seleccionarProducto = (elemento) => {
        setSeleccion(elemento)
        setShow(true)
    }

    return (
        <>
            <button type="button" className="btn btn-sm btn-white mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar"
                onClick={() => seleccionarProducto(producto)}>
                <i class="fas fa-pencil-alt text-primary"></i>
            </button>
            {/* MODAL EDITAR */}
            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Editar información <strong>{seleccion.nombre}</strong></Modal.Title>
                    <Button variant="light" size="sm" onClick={handleClose}>
                        <i class="fas fa-times"></i>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="row d-flex justify-content-center my-1 pt-1">
                        <div className="col">
                            <form action="">
                                <div className="my-1">
                                    <label htmlFor="" className="form-label mx-2">Nombre</label>
                                    <input className="form-control form-control-sm"
                                        value={seleccion.nombre}
                                        name="nombre"
                                    />
                                </div>
                                <div className="my-1">
                                    <label htmlFor="inputCategoria" className="form-label mx-2">Categoría</label>
                                    <select name="categoria" class="form-control form-control-sm" aria-label=".form-select-sm example">
                                        <option selected>Selecciona la categoría del producto</option>
                                        <option value="Amasanderia">Amasandería</option>
                                        <option value="Panaderia">Panadería</option>
                                        <option value="Empanadas">Empanadas</option>
                                        <option value="Pasteleria">Pastelería</option>
                                        <option value="Masas-Dulces">Masas Dulces</option>
                                        <option value="Almacen">Almacén</option>
                                    </select>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="my-1">
                                        <label htmlFor="" className="form-label mx-2">Stock</label>
                                        <input className="form-control form-control-sm"
                                            value={seleccion.stock}
                                            name="stock"
                                            type="number"
                                        />
                                    </div>
                                    <div className="my-1">
                                        <label htmlFor="" className="form-label mx-2">Precio</label>
                                        <input className="form-control form-control-sm"
                                            value={seleccion.precio}
                                            name="precio"
                                            type="number"
                                        />
                                    </div>
                                </div>
                                <div className="my-1">
                                    <label htmlFor="" className="form-label mx-2">Descripcion</label>
                                    <textarea className="form-control form-control-sm"
                                        value={seleccion.descripcion}
                                        // placeholder={seleccion.descripcion}
                                        name="descripcion"
                                        rows="2"
                                    // onChange={handleInputChange}
                                    />
                                </div>
                                <div className="my-1">
                                    <label htmlFor="inputImagen" className="form-label">Imagen</label>
                                    <input type="file" name="imagen" className="form-control form-control-sm" placeholder="hola" />
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BotonEditar;
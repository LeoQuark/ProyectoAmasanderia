import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'

function BotonInfo(props) {
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
            <button type="button" className="btn btn-sm btn-white mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Informacion"
                onClick={() => seleccionarProducto(producto)}>
                <i class="fas fa-info-circle text-secondary"></i>
            </button>
            {/* MODAL EDITAR */}
            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Información del producto</Modal.Title>
                    <Button variant="light" size="sm" onClick={handleClose}>
                        <i class="fas fa-times"></i>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center">
                        <table className="table table-sm table-bordered table-hover">
                            <tbody>
                                <tr>
                                    <th scope="row">ID</th>
                                    <td>{producto.id_producto}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Nombre</th>
                                    <td>{producto.nombre}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Categoría</th>
                                    <td>{producto.categoria}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Precio</th>
                                    <td>{producto.precio}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Descripción</th>
                                    <td>{producto.descripcion}</td>
                                </tr>
                                {/* falta una fila con la imagen */}
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BotonInfo;
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import EditarOpc from './EditarOpc'

function Editar(props)=> {

    return (<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
          </Button>
            <Button variant="primary">Understood</Button>
        </Modal.Footer>
    </Modal>);
}

function TablaProductos(props) {

    const productos = props.productos.data;
    // console.table(props.productos.data)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-sm table-striped table-hover">
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
                                        <Button variant="white" onClick={handleShow}>
                                            <i class="fas fa-pencil-alt text-primary"></i>
                                        </Button>
                                        <button type="button" className="btn btn-sm btn-white mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar">
                                            <i class="far fa-trash-alt text-danger"></i>
                                        </button>
                                        <button type="button" className="btn btn-sm btn-white mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Información">
                                            <i class="fas fa-info-circle text-secondary"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    );
}

export default TablaProductos;
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Cargando(){
    return(
        <>
            <span class="spinner-border text-light spinner-border-sm mx-2" role="status" aria-hidden="true">
            </span>
            Cargando
        </>
    );
}

function BotonEditar(props) {
    let producto = props.producto;

    const [show, setShow] = useState(false);
    const [seleccion, setSeleccion] = useState({})
    const [respuesta, setRespuesta] = useState(false)
    const [cargar, setCargar] = useState("Sí, estoy seguro")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const seleccionarProducto = (elemento) => {
        setSeleccion(elemento)
        setShow(true)
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        // event.target.reset()
        setCargar(<Cargando />)
        // console.log(JSON.stringify(datosProductos))
        const requestOptions = {
            method: 'DELETE', // Method itself
        };
        fetch(`http://localhost:4000/api/productos/delete/${producto.id_producto}`, requestOptions)
            .then(response => response.json({
                message: "eliminado"
            }))
            .then(() => setRespuesta(!respuesta))
            .then(()=> setCargar("Listo"))
    }

    useEffect(() => {

    }, [respuesta])

    return (
        <>
            <button type="button" className="btn btn-sm btn-white mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar"
                onClick={() => seleccionarProducto(producto)}>
                <i class="far fa-trash-alt text-danger"></i>
            </button>
            {/* MODAL EDITAR */}
            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Eliminar producto</Modal.Title>
                    <Button variant="light" size="sm" onClick={handleClose}>
                        <i class="fas fa-times"></i>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center">
                        <p>¿Estás seguro de eliminar el producto <strong>{producto.nombre}</strong> ?</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary mx-2" 
                    onClick={handleClose}>
                        No
                    </button>
                    <form action="" onSubmit={enviarDatos} >
                        <button className="btn btn-danger mx-2" 
                         type="submit">
                            {cargar}
                        </button>
                    </form>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BotonEditar;
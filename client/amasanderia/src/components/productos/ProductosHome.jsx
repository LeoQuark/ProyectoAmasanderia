import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Cargando from '../Cargando';
import ProductosCard from './ProductosCard';
import ProductosHeader from './ProductosHeader';

const ProductosHome = (props) => {
    const titulo = props.titulo;
    const [cargando, setCargando] = useState(<Cargando />)

    useEffect(() => {
        const getProductos = async () => {
            try {
                const res = await fetch(`http://localhost:4000/api/productos/get-all`);
                const datos = await res.json();
                setCargando(<ProductosCard productos={datos} />);
                // console.log(datos);
            } catch (err) {
                console.log(err)
            }
        }
        getProductos();

        // el renderizado se hará solo una vez pues le pasamos el argumento vacio '[]'
    }, []);

    return (
        <div className="container-fluid my-2 pt-3">
            <div className="container">
                <div className="d-flex justify-content-start">
                    <h4 className="font-roboto font-weight-bold text-dark">{titulo}</h4>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    {cargando}
                </div>
            </div>
        </div>
    );
}

export default ProductosHome;
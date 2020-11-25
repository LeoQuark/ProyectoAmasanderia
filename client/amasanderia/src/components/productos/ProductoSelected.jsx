import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


import Selected from './Selected'
import Cargando from '../Cargando'

const ProductoSelected = () => {

    const { id } = useParams()
    const [cargando, setCargando] = useState(<Cargando />)

    useEffect(() => {
        const getProductoById = async () => {
            const res = await fetch(`http://localhost:4000/api/productos/get/${id}`)
            const datos = await res.json()
            setCargando(<Selected producto={datos} />)
            console.log(datos)
        }
        getProductoById()

        // el renderizado se hará solo una vez pues le pasamos el argumento vacio '[]'
    }, [])

    return (
        <div className="container-fluid py-5">
            <div className="row">
                {cargando}
            </div>
        </div>
    );
}

export default ProductoSelected;

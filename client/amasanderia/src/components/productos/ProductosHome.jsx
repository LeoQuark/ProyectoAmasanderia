import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Cargando from '../Cargando';
import ProductosCard from './ProductosCard';

const ProductosHome = (props) => {
    const { id } = useParams()
    const [cargando, setCargando] = useState(<Cargando />)

    // useEffect(() => {
    //     const getAves = async () => {
    //         try {
    //             const res = await fetch('https://aves.ninjas.cl/api/birds')
    //             const datos = await res.json()
    //             // a setState se le puede pasar html,objetos,js,array,etc
    //             //con aves={} se utiliza los props, que pasa los datos de la API
    //             setCargando(<Aves aves={datos}></Aves>)
    //         } catch (e) {
    //             console.log(e)
    //         }
    //     }
    //     getAves()
    // }, [])
    return (
        <div className="container-fluid my-2 pt-3">
            <div className="row d-flex justify-content-start">
                <p className="font-weight-bold text-capitalize text-xl sm:text-2xl">{props.titulo}</p>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div className="px-2">
                    <ProductosCard />
                </div>
                <div className="px-2">
                    <ProductosCard />
                </div>
                <div className="px-2">
                    <ProductosCard />
                </div>
                <div className="px-2">
                    <ProductosCard />
                </div>
            </div>
        </div>
    );
}

export default ProductosHome;
import React from 'react'
import { Link } from 'react-router-dom'
import HomeCarrusel from './home/HomeCarrusel'
import HomeInfo from './home/HomeInfo'
import HomeCategorias from './home/HomeCategorias'

const Intro = () => {

    return (
        <div className="pt-5 mt-2 content">
            <div className="container-fluid mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-5 mx-1 py-5">
                        <div className="align-items-center py-5">
                            <p className="text-center hover-scale-xl pt-5 pb-3">Benito & Sofia</p>
                            <p className="text-center">amasandería - pastelería - almacén</p>
                            <div className="d-flex justify-content-center pt-5">
                                <button className="btn btn-primary  mx-3">Ver Productos</button>
                                <button className="btn btn-outline-primary btn-lg mx-3">Conócenos</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mx-1">
                        <HomeCarrusel />
                    </div>
                </div>
            </div>
            {/* <HomeInfo /> */}
            <HomeCategorias />
        </div>
    );
}

export default Intro;
import React from 'react'
import { Link } from 'react-router-dom'
import HomeInfo from './home/HomeInfo'
import HomeCategorias from './home/HomeCategorias'
import HomeInicioCarrusel from './home/HomeInicioCarrusel'

const Intro = () => {

    return (
        <div className="pt-5 mt-2 content">
            <div className="container-fluid">
                <div className="">
                    <div className="row">
                        <HomeInicioCarrusel />
                    </div>
                    <div className="row">
                        <HomeCategorias />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
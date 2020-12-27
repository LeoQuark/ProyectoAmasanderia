import React from 'react'
import { Carousel } from 'react-bootstrap'

function HomeInicioCarrusel() {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="2000">
                        <img src="/img/carrusel1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src="/img/carrusel2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src="/img/carrusel3.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev text-dark" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <i class="fas fa-chevron-left fa-2x" aria-hidden="true"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next text-dark" href="#carouselExampleInterval" role="button" data-slide="next">
                    <i class="fas fa-chevron-right fa-2x" aria-hidden="true"></i>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
}

export default HomeInicioCarrusel;
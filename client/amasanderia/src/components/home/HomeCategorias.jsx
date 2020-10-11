import React from 'react'

const HomeCategorias = () => {


    return (
        <div className="container-fluid px-0 pt-5">
            <div className="d-flex justify-content-center bg-gradient-to-r from-green-300 to-green-500 py-3 px-0">
                <h3 className="text-4xl md:text-5xl font-sansita my-2">Categorías destacadas</h3>
            </div>
            <div className="container">
                <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1">
                    <div className="col rounded my-lg-3 my-2">
                        <div className="card text-white hover-scale-sm">
                            <img src="/img/pan.jpg" class="card-img img-home " alt="..." />
                            <div className="card-img-overlay">
                                <div className="pt-5">
                                    <h2 className="card-title text-5xl sm:text-4xl xl:text-5xl text-center pt-5 font-weight-bold">Panadería</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col rounded my-lg-3 my-2">
                        <div className="card text-white hover-scale-sm">
                            <img src="/img/pasteles.jpg" class="card-img img-home" alt="..." />
                            <div className="card-img-overlay">
                                <div className="pt-5">
                                    <h2 className="card-title text-5xl sm:text-4xl xl:text-5xl text-center pt-5 font-weight-bold">Pastelería</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col rounded my-lg-3 my-2">
                        <div className="card text-white hover-scale-sm">
                            <img src="/img/empanadas.jpg" class="card-img img-home" alt="..." />
                            <div className="card-img-overlay">
                                <div className="pt-5">
                                    <h2 className="card-title text-5xl sm:text-4xl xl:text-5xl text-center pt-5 font-weight-bold">Empanadas</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col rounded my-lg-3 my-2">
                        <div className="card text-white hover-scale-sm">
                            <img src="/img/dulce.jpg" class="card-img img-home" alt="..." />
                            <div className="card-img-overlay">
                                <div className="pt-5">
                                    <h2 className="card-title text-5xl sm:text-4xl xl:text-5xl text-center pt-5 font-weight-bold">Masas Dulces</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col rounded my-lg-3 my-2">
                        <div className="card text-white hover-scale-sm">
                            <img src="/img/cafe.jpg" class="card-img img-home" alt="..." />
                            <div className="card-img-overlay">
                                <div className="pt-5">
                                    <h2 className="card-title text-5xl sm:text-4xl xl:text-5xl text-center pt-5 font-weight-bold">Bebestibles</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col rounded my-lg-3 my-2">
                        <div className="card text-white hover-scale-sm">
                            <img src="/img/almacen.jpg" class="card-img img-home" alt="..." />
                            <div className="card-img-overlay">
                                <div className="pt-5">
                                    <h2 className="card-title text-5xl sm:text-4xl xl:text-5xl text-center pt-5 font-weight-bold">Almacén</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCategorias;
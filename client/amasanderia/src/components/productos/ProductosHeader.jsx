import React from 'react'
import ProductosHome from './ProductosHome'

const ProductosHeader = () => {

    return (
        <div className="container-fluid ">
            <div className="d-flex rounded-bottom justify-content-center bg-cafeo">
                <ul className="nav" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active font-producto" id="oferta-tab" data-toggle="tab" href="#oferta" role="tab" aria-controls="ofertas" aria-selected="true">Ofertas</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link font-producto" id="panaderia-tab" data-toggle="tab" href="#panaderia" role="tab" aria-controls="profile" aria-selected="false">Panadería</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link font-producto" id="empanadas-tab" data-toggle="tab" href="#empanadas" role="tab" aria-controls="contact" aria-selected="false">Empanadas</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link font-producto" id="pasteleria-tab" data-toggle="tab" href="#pasteleria" role="tab" aria-controls="contact" aria-selected="false">Pastelería</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link font-producto" id="dulces-tab" data-toggle="tab" href="#dulces" role="tab" aria-controls="contact" aria-selected="false">Masas dulces</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link font-producto" id="almacen-tab" data-toggle="tab" href="#almacen" role="tab" aria-controls="contact" aria-selected="false">Almacen</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content " id="myTabContent">
                <div class="tab-pane fade show active" id="oferta" role="tabpanel" aria-labelledby="oferta-tab">
                    <ProductosHome titulo={'Oferta'} />
                </div>
                <div class="tab-pane fade" id="panaderia" role="tabpanel" aria-labelledby="panaderia-tab">
                    <ProductosHome titulo={'Panadería'} />
                </div>
                <div class="tab-pane fade" id="empanadas" role="tabpanel" aria-labelledby="empanadas-tab">
                    <ProductosHome titulo={'Empanadas'} />
                </div>
                <div class="tab-pane fade" id="panaderia" role="tabpanel" aria-labelledby="panaderia-tab">
                    <ProductosHome titulo={'Panadería'} />
                </div>
                <div class="tab-pane fade" id="pasteleria" role="tabpanel" aria-labelledby="pasteleria-tab">
                    <ProductosHome titulo={'Pastelería'} />
                </div>
                <div class="tab-pane fade" id="dulces" role="tabpanel" aria-labelledby="dulces-tab">
                    <ProductosHome titulo={'Dulces'} />
                </div>
                <div class="tab-pane fade" id="almacen" role="tabpanel" aria-labelledby="almacen-tab">
                    <ProductosHome titulo={'Almacen'} />
                </div>
            </div>
        </div>
    );
}

export default ProductosHeader;
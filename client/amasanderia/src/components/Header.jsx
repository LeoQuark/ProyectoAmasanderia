import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="conatainer-fluid fixed-top">
      {/* <div className="container-fluid bg-orange-800 pt-1">
        <div className="row d-flex justify-content-end">
          <div className="col-auto ">
            <Link>
              <div className="bg-black text-white px-2 rounded-md py-1">Iniciar Sesión <span><i class="fas fa-sign-in-alt fa-md"></i></span></div>
            </Link>
          </div>
        </div>
      </div> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-orange-900">
        <div className="container">
          <div className="row pl-2">
            <Link to="/" className="d-inline-flex">
              <img src="/img/logo.png" className="img-logo" alt="" />
              {/* <a className="navbar-brand text-decoration-none text-capitalize mx-2 pl-3">
                <p className="text-yellow-300 text-2xl xl:text-3xl font-sansita">Amasanderia</p>
              </a> */}
            </Link>
          </div>
          <button className="navbar-toggler border-2 border-yellow-700 rounded shadow-lg hover:bg-orange-800" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Menu">
            <span className="text-yellow-600"><i class="fas fa-bars fa-2x"></i></span>
          </button>
          <div className="navbar-collapse justify-content-end collapse" id="navbar">
            <div className="row d-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link mx-2">
                    <p className="text-yellow-300 text-lg font-sansita hover:bg-orange-800 rounded px-1 py-1">Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/productos" className="nav-link text-white mx-2">
                    <p className="text-yellow-300 text-lg font-sansita hover:bg-orange-800 rounded px-1 py-1">Productos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacto" className="nav-link text-white mx-2">
                    <p className="text-yellow-300 text-lg font-sansita hover:bg-orange-800 rounded px-1 py-1">Contacto</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/nosotros" className="nav-link text-white mx-2">
                    <p className="text-yellow-300 text-lg font-sansita hover:bg-orange-800 rounded px-1 py-1">Conócenos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="carrito" className="nav-link text-white mx-2">
                    <p className="text-yellow-300 text-lg font-sansita hover:bg-orange-800 rounded px-1 py-1">Carrito
                    <span className="badge bg-yellow-100 text-yellow-800 mx-2">2</span></p>
                    {/* bagde debe cambiar de acuerdo a la cantidad de elementos del carrito */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

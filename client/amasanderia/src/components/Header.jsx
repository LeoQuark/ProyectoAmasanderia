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
      <nav className="navbar navbar-expand-lg navbar-dark bg-orange-800">
        <div className="container">
          <div className="row pl-2">
            <Link to="/">
              {/* img */}
              <a className="navbar-brand text-decoration-none text-capitalize mx-2 pl-3">
                <p className="text-yellow-300 text-2xl xl:text-3xl font-sansita">Amasanderia</p>
              </a>
            </Link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Menu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse justify-content-end collapse"
            id="navbar"
          >
            <div className="row d-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link mx-2">
                    <p className="text-yellow-300 text-lg font-sansita">Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/biblioteca" className="nav-link text-white mx-2">
                    <p className="text-yellow-300 text-lg font-sansita">Productos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacto" className="nav-link text-white mx-2">
                    <p className="text-yellow-300 text-lg font-sansita">Contacto</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-2">
                    <p className="text-yellow-300 text-lg font-sansita">Conócenos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-2">
                    <p className="text-yellow-300 text-lg font-sansita">Carrito
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

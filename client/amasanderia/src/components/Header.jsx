import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="conatainer-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="row pl-2">
            <Link to="/">
              {/* img */}
              <a className="navbar-brand text-decoration-none text-white font-italic text-capitalize mx-2 pl-3">
                Amasanderia
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
                  <Link to="/" className="nav-link text-white mx-2">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/biblioteca" className="nav-link text-white mx-2">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacto" className="nav-link text-white mx-2">
                    Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-2">Acerca</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-2">Carrito</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="text-red-800">hola</div>
    </div>
  );
};

export default Header;

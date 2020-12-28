import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Productos from "./components/Productos";
import Conocenos from "./components/Conocenos";
import Login from "./components/admin/Admin";
import ProductoSelected from "./components/productos/ProductoSelected";
import CarritoBody from "./components/carrito/CarritoBody";
import HeaderAdmin from "./components/admin/HeaderAdmin";
import PanelAdmin from "./components/admin/PanelAdmin";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/productos/:id">
          <Header />
          <ProductoSelected />
          <Footer />
        </Route>
        <Route path="/productos">
          <Header />
          <Productos />
          <Footer />
        </Route>
        {/* <Route path="/admin/:id/panel-administrador">
          <HeaderAdmin />
          <PanelAdmin />
          <Footer />
        </Route> */}
        <Route path="/admin/:id">
          <HeaderAdmin />
          <PanelAdmin />
          <Footer />
        </Route>
        <Route path="/admin">
          <Login />
        </Route>
        <Route path="/user">
          <HeaderAdmin />
        </Route>
        <Route path="/contacto">
          <Header />
          <Contacto />
          <Footer />
        </Route>
        <Route path="/conocenos">
          <Header />
          <Conocenos />
          <Footer />
        </Route>
        <Route path="/carrito">
          <Header />
          <CarritoBody />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

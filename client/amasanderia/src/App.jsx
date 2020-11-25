import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Productos from "./components/Productos";
import Conocenos from "./components/Conocenos";
import Login from "./components/login/Login";
import ProductoSelected from "./components/productos/ProductoSelected";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
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
      </Switch>
    </Router>
  );
}

export default App;

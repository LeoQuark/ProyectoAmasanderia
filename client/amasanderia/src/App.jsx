import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Productos from "./components/Productos";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/contacto">
          <Header />
          <Contacto />
          <Footer />
        </Route>
        <Route path="/producto/:id">
          <Header />

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

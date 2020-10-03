import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

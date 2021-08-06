import React from "react";
import "./App.css";

import Homepage from "./pages/Homepage";
import About from "./pages/About";

import "bootstrap/dist/css/bootstrap.min.css"; ///used for bootstrap as global
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; ///used for making navigation
import NavBar from "./Shared/NavBar";
import Footer from "./Shared/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

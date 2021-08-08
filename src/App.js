import React, { createContext, useState } from "react";
import "./App.css";

import Homepage from "./pages/Homepage";
import About from "./pages/About";

import "bootstrap/dist/css/bootstrap.min.css"; ///used for bootstrap as global
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; ///used for making navigation
import NavBar from "./Shared/NavBar";
import Footer from "./Shared/Footer";
import SignInSignUp from "./pages/SignInSIgnUp";

export const LogInContext = createContext();

function App() {
  const [SignedInUser, setSignedInUser] = useState(false);
  return (
    <LogInContext.Provider value={[SignedInUser, setSignedInUser]}>
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
          <Route exact path="/sign-in" component={SignInSignUp} />
        </Switch>
        <Footer />
      </Router>
    </LogInContext.Provider>
  );
}

export default App;

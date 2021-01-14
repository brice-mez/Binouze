import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Cart from "../views/CartProducts";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Link to="/" />
        <Link to="/Contact" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

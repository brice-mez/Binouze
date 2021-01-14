import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Cart from "../views/CartProducts";
import Profile from "../views/Profile";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Link to="/" />
        <Link to="/Contact" />
        <Link to="/Cart" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

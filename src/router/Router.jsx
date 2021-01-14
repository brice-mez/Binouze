import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "../views/Contact";
import Home from "../views/Home";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

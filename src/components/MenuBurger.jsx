import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "../views/Contact";
import iconbeer from "../images/iconbeer.svg";
import "./MenuBurger.css";

export default function MenuBurger() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Router>
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <img className="MenuBurgerIcon" src={iconbeer} alt="menuburger" />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/">
              <MenuItem onClick={handleClose}>Buy</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <Link to="/Contact">
              <MenuItem onClick={handleClose}>Contact Us</MenuItem>
            </Link>
          </Menu>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

import React from "react";
import MenuBurger from "../MenuBurger";
import Cart from "../icons/ShoppingCart";
import "../Layout/Navbar.css";

export default function Header() {
  return (
    <div className="header">
      <div className="MenuburgerBeer">
        <MenuBurger />
      </div>
      <div className="title">
        <h1>Binouze</h1>
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
}

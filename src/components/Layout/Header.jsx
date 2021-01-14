import React from "react";
import MenuBurger from "../MenuBurger";
import SearchIcon from "../../components/icons/SeachIcon";
import ShoppingCart from "../../components/icons/ShoppingCart";
import PersonIcon from "../../components/icons/PersonIcon";
import StyleHeader from "../Layout/StyleHeader.css";

export default function Header() {
  return (
    <div className="header">
      <div>
        <MenuBurger />
        <SearchIcon />
      </div>
      <div className="title">
        <h1>Binouze</h1>
      </div>
      <div className="cart">
        <PersonIcon />
        <ShoppingCart />
      </div>
    </div>
  );
}

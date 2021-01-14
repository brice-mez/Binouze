import React from "react";
import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <IconButton
      component={Link}
      to="/Cart"
      aria-label="Show cart items"
      color="inherit"
    >
      <Badge badgeContent={2} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default Cart;

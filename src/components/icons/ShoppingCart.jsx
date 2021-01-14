import React from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const Cart = () => {
  return (
    <Badge badgeContent={2} color="secondary">
      <ShoppingCart />
    </Badge>
  );
};

export default Cart;

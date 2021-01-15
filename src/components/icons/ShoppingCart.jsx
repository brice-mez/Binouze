import React, { useContext } from "react";
import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../App";

const Cart = () => {
  const { itemsInCart } = useContext(ShoppingCartContext);
  const n = itemsInCart ? itemsInCart.length : 0;
  return (
    <IconButton
      component={Link}
      to="/Cart"
      aria-label="Show cart items"
      color="inherit"
    >
      <Badge badgeContent={n} color="secondary">
        <ShoppingCart fontSize="large" />
      </Badge>
    </IconButton>
  );
};

export default Cart;

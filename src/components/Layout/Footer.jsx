import React from "react";
import "./Footer.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Footer() {
  return (
    <div className="footer">
      <h3>
        Fait avec beaucoup de bière{" "}
        <FavoriteIcon fontSize="small" color="secondary" />
      </h3>
    </div>
  );
}

import { useContext } from "react";
import { ShoppingCartContext } from "../../App";
import { dataBase } from "../../lib/Api";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import AddShoppingCart from "../../components/icons/AddShoppingCart";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 200,
    paddingTop: "40%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function Beers() {
  const bieres = dataBase;
  const classes = useStyles();
  const context = useContext(ShoppingCartContext);
  const { updateCart, itemsInCart } = context;

  return (
    <div>
      <h2>Achètes et mets en fav tes bières</h2>
      <div className="beercard">
        {bieres.map((biere) => (
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={biere.picture}
              title={biere.name}
            />

            <CardContent>
              <div className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {biere.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {biere.price} €
                </Typography>
              </div>

              <Typography
                dangerouslySetInnerHTML={{ __html: biere.text }}
                variant="body2"
                color="textSecondary"
                component="p"
              />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
              <IconButton
                aria-label="Add to Cart"
                onClick={() => {
                  updateCart([...itemsInCart, biere]);
                }}
              >
                <AddShoppingCart />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Beers;

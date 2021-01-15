import { useContext } from "react";
import { ShoppingCartContext } from "../App";
import Navbar from "../components/Layout/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Footer from "../components/Layout/Footer";
import HomeFrame from "../components/Layout/HomeFrame";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    maxWidth: "80%",
    marginTop: "2rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonbuy: {
    paddingBotton: "2rem",
  },
  h1: {
    margin: "3rem",
  },
}));

export default function Products() {
  const context = useContext(ShoppingCartContext);
  const { updateCart, itemsInCart } = context;
  const classes = useStyles();

  const popup = () => {
    alert("Merci l'ami");
  };

  const groupedItems = itemsInCart.reduce((grouped, item) => {
    const groupedItem = grouped.find(
      (groupedItem) => groupedItem.item.id === item.id
    );
    if (groupedItem) {
      groupedItem.quantity = groupedItem.quantity + 1;
      groupedItem.amount = groupedItem.quantity * groupedItem.item.price;
      return grouped;
    } else {
      return [...grouped, { item, quantity: 1, amount: item.price }];
    }
  }, []);

  const hasItems = groupedItems && groupedItems.length > 0;

  const totalAmount = groupedItems.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);

  return (
    <div className="Cart">
      <div className={classes.main}>
        <Navbar />
        <HomeFrame />
        <h1 className={classes.h1}>ShoppingCart</h1>
        {hasItems ? (
          groupedItems.map(({ item, quantity }) => {
            return (
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {item.price}€ x {quantity} = {item.price * quantity}€
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    <Button
                      variant="contained"
                      onClick={() => {
                        const remainingItems = itemsInCart.filter(
                          (cartItem) => cartItem.id !== item.id
                        );
                        updateCart(remainingItems);
                      }}
                    >
                      Remove from cart
                    </Button>
                  </div>
                </div>
                <CardMedia
                  className={classes.cover}
                  image={item.picture}
                  title={item.name}
                />
              </Card>
            );
          })
        ) : (
          <p>Empty</p>
        )}

        {hasItems && <h5>Total {itemsInCart.length} item(s)</h5>}
        {hasItems && (
          <Button
            variant="contained"
            className={classes.buttonbuy}
            onClick={popup}
          >
            Acheter: {totalAmount}€
          </Button>
        )}
        <p>
          Boire pour oublier mais oublier d'arrêter de boire.(oui c'est un
          footer... il est tard!)
        </p>
        <Footer />
      </div>
    </div>
  );
}

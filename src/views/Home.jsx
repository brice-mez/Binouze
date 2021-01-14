<<<<<<< HEAD
import React from "react";
import { dataBase } from "../components/Api";
=======
import React from 'react';
import { dataBase } from '../components/Api';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
>>>>>>> 9db8d69a6f7f3c8afb4e38cf00d69497483cda69

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

<<<<<<< HEAD
    return (
      <div>
        <h1>Binouze</h1>
        <h2>Achètes et mets en fav tes bières</h2>
        <div className="beercard">
          {bieres.map((biere) => (
            <>
              <p>{biere.id}</p>
              <h3>{biere.name}</h3>
              <img src={biere.picture} alt="bière" />
              <p>{biere.text}</p>
              <p>{biere.price}</p>
            </>
          ))}
        </div>
=======
function Home() {
  const bieres = dataBase;
  const classes = useStyles();

  return (
    <div>
      <h1>Binouze</h1>
      <h2>Achètes en mets en fav tes bières</h2>
      <div className='beercard'>
        {bieres.map((biere) => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={biere.picture}
                title='bière'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h3'>
                  {biere.name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {biere.text}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {biere.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
>>>>>>> 9db8d69a6f7f3c8afb4e38cf00d69497483cda69
      </div>
    </div>
  );
}

export default Home;

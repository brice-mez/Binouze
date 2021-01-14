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
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Home.css';

const useStyles = makeStyles({
  root: {
    maxWidth: '80%',
    marginTop: '2em',
  },
  media: {
    height: 200,
    paddingTop: '40%',
  },
  beercard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Home() {
  const bieres = dataBase;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className='titlehome'>Binouze</h1>
      <h2 className='titlehome2'>Achètes et mets en fav tes bières</h2>
      <div className={classes.beercard}>
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
                <Typography variant='body2' color='textPrimary' component='p'>
                  {biere.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className='panelbutton'>
              <Button size='small' color='primary'>
                <FavoriteIcon color='secondary' />
              </Button>
              <Button size='small' color='primary'>
                <AddShoppingCartSharpIcon color='action' />
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;

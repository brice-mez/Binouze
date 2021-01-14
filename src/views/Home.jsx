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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

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
      </div>
    </div>
  );
}

export default Home;

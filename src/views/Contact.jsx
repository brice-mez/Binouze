import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4.5),
      width: '25ch',
      borderColor: '#947349',
    },
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#947349',
    marginBottom: '5rem',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className='main'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Binouze</title>
        <link rel='canonical' href='sleepy-nobel-079fa1.netlify.app' />
        <meta name='description' content='Acheter des bières' />
      </Helmet>
      <Navbar />
      <h1>Contact</h1>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          id='outlined-basic-name'
          label='Pseudo'
          variant='outlined'
          color='default'
        />
        <TextField
          id='outlined-basic-email'
          label='Email'
          variant='outlined'
          color='default'
        />
        <TextField
          id='outlined-multiline-static'
          label='Commentaire'
          multiline
          rows={4}
          variant='outlined'
          color='default'
        />
        <Button
          variant='contained'
          color='default'
          className={classes.button}
          endIcon={<LocalBarIcon>Drink</LocalBarIcon>}
        >
          SANTE
        </Button>
      </form>
      <Footer />
    </div>
  );
}

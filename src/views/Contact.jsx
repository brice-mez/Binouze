import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField id='outlined-basic-name' label='Outlined' variant='outlined' />
      <TextField
        id='outlined-basic-email'
        label='Outlined'
        variant='outlined'
      />
      <TextField
        id='outlined-multiline-static'
        label='Multiline'
        multiline
        rows={4}
        defaultValue='Default Value'
        variant='outlined'
      />
    </form>
  );
}

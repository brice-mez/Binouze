import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import iconbeer from '../images/iconbeer.svg';
import './MenuBurger.css';

export default function MenuBurger() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <img className='MenuBurgerIcon' src={iconbeer} alt='menuburger' />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to='/'>
          Shop
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/Profile'>
          Profil
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/Contact'>
          Contact
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/Cart'>
          Panier
        </MenuItem>
      </Menu>
    </div>
  );
}

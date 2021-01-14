import React from 'react';
import profil from '../images/profil.jpg';
import './Profile.css';

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <img src={profil} alt='bière' className='profilimage' />
    </div>
  );
}

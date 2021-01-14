<<<<<<< HEAD
import React from "react";
import Navbar from "../components/Layout/Navbar";
import HomeFrame from "../components/Layout/HomeFrame";
export default function Home() {
  return (
    <div className="Home">
      <div>
        <Navbar />
        <HomeFrame />
      </div>
    </div>
  );
=======
import React from 'react';
import { dataBase } from '../components/Api';

class Home extends React.Component {
  render() {
    const bieres = dataBase;

    return (
      <div>
        <h1>Binouze</h1>
        <h2>Achètes en mets en fav tes bières</h2>
        <div className='beercard'>
          {bieres.map((biere) => (
            <>
              <p>{biere.id}</p>
              <h3>{biere.name}</h3>
              <img src={biere.picture} alt='bière' />
              <p>{biere.text}</p>
              <p>{biere.price}</p>
            </>
          ))}
        </div>
      </div>
    );
  }
>>>>>>> b03cc36f64904eeb1cdc17822dc4fc85190ad6d0
}

export default Home;
